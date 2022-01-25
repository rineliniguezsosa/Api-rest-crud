const mongoose = require('mongoose')


const Usuario = mongoose.Schema({
    nombre:{type:String},
    edad:{type:Number},
    email:{type:String}
})


module.exports = mongoose.model('Usuario',Usuario)