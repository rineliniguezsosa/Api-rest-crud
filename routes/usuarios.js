const express = require('express')
const { Model } = require('mongoose')
const router = express.Router()
const Modelusuario = require('../models/Usuarios')
const { 
    todoslosusuarios,
    usuarioporid,
    deletebyid,
    agregarusuario,
    actualizabyid } = require('../controllers/usuario')

router.get('/todos',todoslosusuarios)

router.get('/usuariobyid/:id',usuarioporid)

router.delete('/deletebyid/:id',deletebyid)

router.post('/agregar',agregarusuario)

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