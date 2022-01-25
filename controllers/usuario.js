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

const usuarioporid = async (req = request,res = response)=>{
    const id = req.params.id;
    const usuariobyid = await Modelusuario.findById({_id:id})
    try{
        res.json(usuariobyid)
    }catch(err){
        res.json({msg:"Algo salio mal"})
    }
}

const deletebyid = async (req = request,res = response)=>{
    const id = req.params.id
    const deletebyid = await Modelusuario.deleteOne({_id:id})
    try{
        res.json(deletebyid)
    }catch(err){
        res.json({msg:"Message:Algo salio mal"})
    }
}

const agregarusuario = async (req = request,res = response)=>{
    const usuario = new Modelusuario({      
        nombre: req.body.nombre,
        edad: req.body.edad,   
        email: req.body.email
    })
    const save = await usuario.save();
     try{
          res.json(save)
     }catch(err){
        res.json("Message:Algo salio mal")
     }
}

module.exports = {
    todoslosusuarios,
    usuarioporid,
    deletebyid
}