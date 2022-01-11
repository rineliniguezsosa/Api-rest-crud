const express = require('express')
const router = express.Router()
const Modelusuario = require('../models/Usuarios')

router.get('/todos',async(req,res)=>{
    const todos = await Modelusuario.find({})
    try{
        res.send(todos)
    }catch(err){
        res.send("Message:Algo salio mal")
    }

})

router.get('/usuariobyid/:id',async(req,res)=>{
    const id = req.params.id;
    const usuariobyid = await Modelusuario.findById({_id:id})
    try{
        res.send(usuariobyid)
    }catch(err){
        res.send("Message:Algo salio mal")
    }
})

router.delete('/deletebyid/:id',async(req,res)=>{
    const id = req.params.id
    const deletebyid = await Modelusuario.deleteOne({_id:id})
    try{
        res.send(deletebyid)
    }catch(err){
        res.send("Message:Algo salio mal")
    }
})

router.post('/agregar',async(req,res)=>{
    const usuario = new Modelusuario({      
        nombre: req.body.nombre,
        edad: req.body.edad,   
        email: req.body.email
    })
    const save = await usuario.save();
     try{
          res.send(save)
     }catch(err){
        res.send("Message:Algo salio mal")
     }
})

module.exports = router