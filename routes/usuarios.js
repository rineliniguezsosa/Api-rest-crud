const express = require('express')
const { check } = require('express-validator')
const router = express.Router()
const validarcampos = require('../middlewares/validarcampos')

const { 
    todoslosusuarios,
    usuarioporid,
    deletebyid,
    agregarusuario,
    actualizabyid } = require('../controllers/usuario')


router.get('/todos',todoslosusuarios)

router.get('/usuariobyid/:id',[check('id','No es un id valido').isMongoId()],validarcampos,usuarioporid)

router.delete('/deletebyid/:id',[check('id','No es un id valido').isMongoId()],validarcampos,deletebyid)

router.post('/agregar',[check('nombre','El campo Nombre es requerido!').notEmpty()],validarcampos,agregarusuario)

router.put('/actualizabyid/:id',[check('id','No es un id valido').isMongoId()],validarcampos,actualizabyid)

module.exports = router