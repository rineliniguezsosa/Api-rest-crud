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

router.put('/actualizabyid/:id',actualizabyid)

module.exports = router