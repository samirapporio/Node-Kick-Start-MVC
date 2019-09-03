const express = require('express');
const router = express.Router();
const masterAdmiService = require('../../../services/v1/msteradmin');

router.get('/merchants_list',masterAdmiService.merchantList);

module.exports = router;