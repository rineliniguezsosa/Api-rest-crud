const express = require('express')
const { check } = require('express-validator')
const router = express.Router()
const { 
    todoslosusuarios,
    usuarioporid,
    deletebyid,
    agregarusuario,
    actualizabyid } = require('../controllers/usuario')

router.get('/todos',todoslosusuarios)

router.get('/usuariobyid/:id',[check('id','No es un id valido').isMongoId()],usuarioporid)

router.delete('/deletebyid/:id',deletebyid)

router.post('/agregar',agregarusuario)

router.put('/actualizabyid/:id',actualizabyid)

module.exports = router