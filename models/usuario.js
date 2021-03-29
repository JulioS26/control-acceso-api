const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    usuario:String,
    clave:String,
    created:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model('Usuario', postSchema);