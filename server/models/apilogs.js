const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const Schema = mongoose.Schema;


const apiLofSchema = new Schema({
    name:String,
    type:String,
    method:String,
    url:String,
    headers:JSON,
    postscript:JSON,
    result:Number,
    message:String,
    response:JSON,
    response_status:Number
},{timestamps:true});


apiLofSchema.plugin(mongoosePaginate);


module.exports = mongoose.model("Apilogs", apiLofSchema);