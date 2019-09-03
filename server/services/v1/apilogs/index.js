const {failedResponse, successResponse, exceptionResponse} = require('../../../utils/response_handler');
const {apinames} = require('../../../utils/apinames');
const response_status = require('../../../utils/response_status');
const apiLogsModel = require('../../../models/apilogs');

const getList = async (req, res) => {
    try {

        successResponse(apinames.API_NAMES,"Names fetched successfully",Object.values(apinames), response_status.OK,req, res)
    }catch (e) {
        exceptionResponse(apinames.API_NAMES,e, req, res)
    }

    apinames.API_NAMES.posting_script = true
};


const getLogsByApiName = async (req, res)=>{
    try {

        const options = {
            page: req.body.hasOwnProperty("page")? req.body.page : 1,
            limit: 10,
            collation: {
                locale: 'en'
            }
        };

        const data = await apiLogsModel.paginate(apiLogsModel.find({name:req.body.api_name}).sort("-createdAt"),  options);

        // const data = await apiLogsModel.find({name:req.body.api_name}).sort("-createdAt").limit(10);
        // const dataToSend = await apiLogsModel.aggregate([{$match:{name:req.body.api_name}}]);

        if(data.docs.length == 0 ){
            failedResponse(apinames.API_LOG_BY_NAME, "No Logs Found",[], response_status.NOT_FOUND, req, res)
        }

            const total_failed = data.docs.filter((obj) => obj.result === 0);
            const total_success = data.docs.filter((obj) => obj.result === 1);
            const total_exceptions = data.docs.filter((obj) => obj.result === 2);

            const data_to_send = {}
            data_to_send.total_failed = total_failed.length ;
            data_to_send.total_success = total_success.length ;
            data_to_send.total_exceptions = total_exceptions.length ;
            data_to_send.logs = data.docs;
            data_to_send.total_pages = data.totalPages;
            data_to_send.nextPage = data.nextPage;



        successResponse(apinames.API_LOG_BY_NAME, "Api Logs fetched successfully",data_to_send, response_status.NOT_FOUND, req, res)
    }catch (e) {
        exceptionResponse(apinames.API_LOG_BY_NAME, e, req, res)
    }


}


const getLogsByUnique = async (req, res)=>{
    try{
        apiLogsModel.find().distinct("name", (err, names)=>{
            if(err){
                failedResponse(apinames.API_LOG_UNIQUE,"No Result found", [], response_status.OK,req, res)
            }successResponse(apinames.API_LOG_UNIQUE,"Name fetched successfully", names, response_status.OK,req, res)
        })

    }catch(e){
      exceptionResponse(apinames.API_LOG_UNIQUE, e, req, res)
    }
}


module.exports = {
    getList: getList,
    getLogsByApiName:getLogsByApiName,
    getLogsByUnique:getLogsByUnique
};