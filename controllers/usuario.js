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

const usuarioporid = async ()=>{
    const id = req.params.id;
    const usuariobyid = await Modelusuario.findById({_id:id})
    try{
        res.json(usuariobyid)
    }catch(err){
        res.json({msg:"Algo salio mal"})
    }
}

module.exports = {
    todoslosusuarios
}