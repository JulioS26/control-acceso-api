const mongoose = require('mongoose');

const salidaSchema = mongoose.Schema({
    cedula:String,
    created:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model('Salida', salidaSchema);