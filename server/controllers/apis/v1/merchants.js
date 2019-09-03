const express = require('express');
const merchantService = require('../../../services/v1/merchants');
const validation = require('../../../middlewares/validation');
const authMiddleware = require('../../../middlewares/authGaurd')

const router = express.Router();

router.post('/create', validation.validateMerchantCreate(), merchantService.create);

router.post('/login', validation.validateMerchantLogin(), merchantService.login);

router.post('/register', validation.validateMerchantRegister(), merchantService.register);

router.post('/cofiguration/create',validation.validateMerchantConfigCreate(),  merchantService.createMerchantConfig)

router.get('/cofiguration',authMiddleware.authClientToken,  merchantService.getConfiguration)

router.get('/list',merchantService.getAllMerchants)

module.exports = router;