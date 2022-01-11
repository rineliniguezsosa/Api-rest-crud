const mongoose = require('mongoose')


const Usuario = mongoose.Schema({
    email:{type:String,required:true}
})


module.exports = mongoose.model('Usuario',Usuario)