const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const configSchema = new Schema({
    merchant: {type: Schema.Types.ObjectId, ref: 'Merchant'},
    visitor_status: [{type: Schema.Types.ObjectId, ref: 'Status'}],
    official_status: [{type: Schema.Types.ObjectId, ref: 'Status'}],
    documents: [{type: Schema.Types.ObjectId, ref: 'Document'}],
    visitorTypes: [{type: Schema.Types.ObjectId, ref: 'VisitorType'}],
    vehicleTypes: [{type: Schema.Types.ObjectId, ref: 'VehicleType'}],
});

module.exports = mongoose.model("Config", configSchema);