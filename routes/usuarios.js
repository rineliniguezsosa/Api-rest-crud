const express = require('express')
const { Model } = require('mongoose')
const router = express.Router()
const Modelusuario = require('../models/Usuarios')
const { todoslosusuarios,usuarioporid,deletebyid } = require('../controllers/usuario')

router.get('/todos',todoslosusuarios)

router.get('/usuariobyid/:id',usuarioporid)

router.delete('/deletebyid/:id',deletebyid)

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

router.put('/actualizabyid/:id',async(req,res)=>{
    const id = req.params.id
    //{$set:{nombre:req.body,edad:req.body,email:req.body}}
    const actualiza = await Modelusuario.updateOne({_id:id},{$set:req.body})
    try{
        res.send(actualiza)
   }catch(err){
      res.send("Message:Algo salio mal")
   }
})

module.exports = router