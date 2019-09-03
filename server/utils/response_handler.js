 const apilogsModel = require('../models/apilogs');
 const response_status = require('../utils/response_status');

 const successResponse = (apiname, message, data ,status, req, res)=>{

     const data_to_Send = {
         result:1,
         message:message,
         response:data
     }

    res.status(status).json(data_to_Send)
     preserveLogs(apiname, message, data_to_Send ,status, req, res, 1);
 }

 const failedResponse = (apiname, message, data ,status, req,  res)=>{

     const data_to_send = {
         result:0,
         message:message,
         response:data
     }
     res.status(status).json(data_to_send)
     preserveLogs(apiname, message, data_to_send ,status, req, res, 0);
 }

 const exceptionResponse = (apiname, error , req,  res)=>{
     const data_to_send = {
         result:2,
         message:"Exception Caught",
         response:error.message
     }
     res.status(response_status.OK).json(data_to_send)
     preserveLogs(apiname, message, data_to_send ,status, req, res, 2);
 }


 const preserveLogs = (apiname, message, data ,status, req, res, result_val)=>{

     console.log("preservinf LOG","****************************")



     try{apilogsModel.create({
         name:apiname.name,
         type:"Admin",
         method:req.method,
         url:req.originalUrl,
         headers:{
             token:req.header('x-access-token'),
             content_type:req.header('content-type'),
             user_agent:req.header('user-agent'),
             host:req.header('host'),
             content_length:req.header('content-length')
         },
         postscript:apiname.posting_script?req.body:"",
         result:result_val,
         message:message,
         response:apiname.response?data:"",
         response_status:status
     });
     }catch (e) {
         console.log("########################", e.message)
     }
 }




 module.exports = {successResponse, failedResponse, exceptionResponse}