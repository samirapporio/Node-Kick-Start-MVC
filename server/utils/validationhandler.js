const {validationResult} = require("express-validator/check");
const{failedResponse} = require('../utils/response_handler');
const response_status = require('../utils/response_status');

const validateIncomingData = function (apiname, req, res){
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        failedResponse(apiname,"Keys Validation failed",errors.array(),response_status.UNPROCESSED_ENTITY, req, res);
    }
}

module.exports = {validateIncomingData}