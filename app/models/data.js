// app/models/data.js

var mongoose = require('mongoose');
module.exports = mongoose.model('data', {item: String},'data');