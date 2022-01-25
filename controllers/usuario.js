const Modelusuario = require('../models/Usuarios')
const { response } = require('express')

const todoslosusuarios = async (res = response)=>{
    const todos = await Modelusuario.find({})
    try{
        res.send(todos)
    }catch(err){
        res.send("Message:Algo salio mal")
    }
}

module.exports = {
    todoslosusuarios
}