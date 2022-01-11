const mongoose = require('mongoose')


const Usuario = mongoose.Schema({
    nombre:{type:String,required:true},
    edad:{type:Number,required:true},
    email:{type:String,required:true}
})


module.exports = mongoose.model('Usuario',Usuario)