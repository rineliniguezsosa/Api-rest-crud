const express = require('express')
const router = express.Router()
const Modelusuario = require('../models/Usuarios')

router.get('/all',async (req,res)=>{
    res.send({"hola":"mundo"})
})

router.post('/agregar',async(req,res)=>{
    const usuario = new Modelusuario({
        email: req.body.email,
    })
    const save = await usuario.save();
     
     try{
          res.send(save)
     }catch(err){
          res.send(err)
     }
})

module.exports = router