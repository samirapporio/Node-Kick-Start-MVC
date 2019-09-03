const merchantsModel = require('../../../models/merchants');
const {failedResponse, successResponse, exceptionResponse} = require('../../../utils/response_handler');
const response_status = require('../../../utils/response_status');
const {apinames} = require('../../../utils/apinames');

const merchantList = async (req, res) => {
    try {
        const merchantsList = await merchantsModel.find();
        if(merchantsList.length ==0){
            failedResponse(apinames.MERCHANTS_LIST_2, "No merchants found",[], response_status.NOT_FOUND,req,  res)
        }successResponse(apinames.MERCHANTS_LIST_2, "Merchants fetched successfully",merchantsList, response_status.OK, req,  res)
    }catch (e) {
        exceptionResponse(apinames.MERCHANTS_LIST_2,e,req, res)
    }

};









module.exports = {
    merchantList: merchantList
};