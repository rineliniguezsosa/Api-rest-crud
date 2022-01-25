const { response, request } = require('express');
const Modelusuario = require('../models/Usuarios')


const todoslosusuarios = async (res = response)=>{
    const todos = await Modelusuario.find({})
    try{
        res.json(todos)
    }catch(err){
        res.json({msg:"Algo salio mal"})
    }
}

module.exports = {
    todoslosusuarios
}