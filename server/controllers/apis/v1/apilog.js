const express = require('express');
const apiLogService = require('../../../services/v1/apilogs');
const apiValidation = require('../../../middlewares/apiValidation');


const router = express.Router();

router.get('/list', apiLogService.getList);

router.post('/logs/', apiValidation.apiNameValidation(), apiLogService.getLogsByApiName);

router.get('/all_logs_types_in_db', apiLogService.getLogsByUnique);



module.exports = router;