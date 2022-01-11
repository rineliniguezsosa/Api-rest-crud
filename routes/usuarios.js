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
          res.send(err)
     }
})

module.exports = router