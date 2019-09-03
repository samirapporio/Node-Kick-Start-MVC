const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const merchantSchema = new Schema({
    name: String,
    logo: String,
    type: Number,
    pin: String,
    code: {type: String, unique: true},
}, {timestamp: true});

module.exports = mongoose.model('Merchant', merchantSchema);