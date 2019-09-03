const {body} = require('express-validator/check');

const validateMerchantLogin = () => {
    return [
        body('pin')
            .exists()
            .withMessage('Pin is required'),

        body('code').exists()
            .withMessage('Code is required'),
    ];
};

const validateMerchantRegister = () => {
    return [
        body('name')
            .exists()
            .withMessage('Name is required'),
        body('logo').exists()
            .withMessage('Logo is required'),
        body('type').exists()
            .withMessage('Type is required'),
    ];
};


const validateMerchantCreate = ()=>{
    return [
        body('name').exists().withMessage('Name is required'),
        body('logo').exists().withMessage('Logo is required'),
        body('type').exists().withMessage('Type is required'),
        body('pin').exists().withMessage('pin is required'),
        body('code').exists().withMessage('code is required'),
    ];
}

const validateMerchantConfigCreate = ()=>{
    return [
        body('merchant').not().isEmpty().withMessage('merchant id  is required'),
        body('visitor_status').not().isEmpty().withMessage('Selected overall status that this merchant is required'),
        body('official_status').not().isEmpty().withMessage('Selected overall status that this merchant is required'),
        body('visitor_types').not().isEmpty().withMessage('selected visitor types required by the merchant ie array of visitors ids'),
        body('vehicle_types').not().isEmpty().withMessage('Selected vehicles types for this merchant ie array of vehicle_types id. '),
        body('documents').not().isEmpty().withMessage('Document are missing '),
    ];
}

module.exports = {
    validateMerchantLogin: validateMerchantLogin,
    validateMerchantRegister: validateMerchantRegister,
    validateMerchantCreate:validateMerchantCreate,
    validateMerchantConfigCreate:validateMerchantConfigCreate
};