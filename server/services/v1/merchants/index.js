const jwt = require('jsonwebtoken');
const config = require("../../../config/env_config/config");
const merchantModel = require('../../../models/merchants');
const configModel = require('../../../models/config');
const {failedResponse, successResponse, exceptionResponse} = require('../../../utils/response_handler');
const response_status = require('../../../utils/response_status');
const {apinames} = require('../../../utils/apinames');
const {validateIncomingData} = require('../../../utils/validationhandler');

const login = async (req, res) => {
    validateIncomingData(apinames.MERCHANT_LOGIN, req, res);
    try {
        let {pin, code} = req.body;

        let merchant = await merchantModel.findOne({"code": code});

        if (!merchant) {
            failedResponse(apinames.MERCHANT_LOGIN,"No Record Found",[],response_status.NOT_FOUND, req, res);
        }

        if (merchant.pin !== pin) {
            failedResponse(apinames.MERCHANT_LOGIN,"In-correct Pin",[],response_status.BAD_REQUEST, req, res);
        }
        successResponse(apinames.MERCHANT_LOGIN,"Merchant Logged in successfully", {merchant, token:jwt.sign({id: merchant._id}, config.secret)},response_status.OK, req, res);

    }catch (e) {
        exceptionResponse(apinames.MERCHANT_LOGIN, e, req, res)
    }
};

const register = (req, res) => {
    validateIncomingData(apinames.CREATE_MERCHANT_2,req, res);
    try{
        let code = Math.random().toString().substr(2, 5);
        let pin = Math.random().toString(36).substr(2, 5);

        let merchant = new merchantModel({
            name: req.body.name,
            logo: req.body.logo,
            type: req.body.type,
            code: code,
            pin: pin,
        });
        merchant.save();
        successResponse(apinames.CREATE_MERCHANT_2, "Merchant Created Successfully", merchant,response_status.CREATED,req, res);
    }catch (e) {
        exceptionResponse(apinames.CREATE_MERCHANT_2, e, req, res)
    }

};


const create = async (req, res )=>{
    validateIncomingData(apinames.CREATE_MERCHANT, req, res);
    try{
        const merchant = await merchantModel.create({
            name: req.body.name,
            logo: req.body.logo,
            type: req.body.type,
            pin: req.body.type,
            code:req.body.code,
        });

        if(!merchant){
            failedResponse(apinames.CREATE_MERCHANT,"Merchant not create", [],response_status.CONFLICT, req, res)
        }
        successResponse(apinames.CREATE_MERCHANT, "Merchant created successfully ",merchant, response_status.CREATED, req, res);
    }catch (e) {
        exceptionResponse(apinames.CREATE_MERCHANT,e,req, res)
    }

}

const getConfiguration = async (req, res)=>{

    try {
        let merchantConfig = await configModel.findOne({'merchant':req.userID})
            .populate({path:'official_status'})
            .populate({path:'visitor_status'})
        successResponse(apinames.MERCHANT_CONFIGURATION, "Configuration fetched successfully", merchantConfig,response_status.OK, req, res);
    }catch (e) {
        exceptionResponse(apinames.MERCHANT_CONFIGURATION, e, req, res)
    }
}


const createMerchantConfig = async (req, res)=>{
    validateIncomingData(apinames.CREATE_MERCHANT_CONFIGURATION, req, res);


    try{
        let configuration = await configModel.create({
            merchant: req.body.merchant,
            visitor_status: req.body.visitor_status,
            official_status: req.body.official_status,
            documents: req.body.documents,
            visitorTypes: req.body.visitorTypes,
            vehicleTypes: req.body.vehicleTypes,
        })
        if(!configuration){

            failedResponse(apinames.CREATE_MERCHANT_CONFIGURATION, "Unable to create merchant's configuration ",[],response_status.CONFLICT, req, res)
        }
        successResponse(apinames.CREATE_MERCHANT_CONFIGURATION, "Merchant's configuration created successfully",configuration,response_status.CREATED,req,  res)
    }catch (e) {
        exceptionResponse(apinames.CREATE_MERCHANT_CONFIGURATION,e, req, res)
    }
}


const getAllMerchants = async (req, res)=>{
    try{
        const mMerchants = await merchantModel.find();
        if(!mMerchants){
            failedResponse(apinames.MERCHANTS_LIST, "Unable to fetch merchants",[], response_status.INTERNAL_SERVER_ERROR,req,  res)
        }successResponse(apinames.MERCHANTS_LIST, "Successfully fetched all merchants", mMerchants, response_status.OK, req, res)
    }catch (e) {
        exceptionResponse(apinames.MERCHANTS_LIST, e, req, res)
    }
}



module.exports = {
    login: login,
    register: register,
    getConfiguration:getConfiguration,
    create:create,
    createMerchantConfig:createMerchantConfig,
    getAllMerchants:getAllMerchants
};