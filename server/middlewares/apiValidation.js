const {body} = require('express-validator/check');


const apiNameValidation =()=>{
    return[
        body('api_name').not().isEmpty().withMessage('unique id Is missing'),
    ]

}



module.exports = {
    apiNameValidation: apiNameValidation
};
