const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    cedula:String,
    created:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model('Salida', postSchema);