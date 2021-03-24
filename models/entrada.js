const mongoose = require('mongoose');

const entradaSchema = mongoose.Schema({
    cedula:String,
    created:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model('Entrada', entradaSchema);