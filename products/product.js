const mongoose = require('mongoose');
module.exports = mongoose.model('product', new mongoose.Schema({
    title: String,
    desc: String
}));