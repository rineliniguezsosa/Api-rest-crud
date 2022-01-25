const mongoose = require('mongoose')


const Usuario = mongoose.Schema({
    nombre:{type:String},
    edad:{type:Number,required:true,max:[50,'Solo 50 años es el rango de edad establecido']},
    email:{type:String,required:true}
})


module.exports = mongoose.model('Usuario',Usuario)