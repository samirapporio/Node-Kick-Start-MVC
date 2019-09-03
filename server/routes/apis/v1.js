const express = require('express');
const router = express.Router();

const merchantController = require('../../controllers/apis/v1/merchants');
const masterAdminController = require('../../controllers/apis/v1/MasterAdmin');
const apiLogsController = require('../../controllers/apis/v1/apilog');



router.use('/merchant', merchantController);

router.use('/master_admin', masterAdminController);

router.use('/apilogs', apiLogsController);


module.exports = router;

