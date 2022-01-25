const express = require('express')
const { check } = require('express-validator')
const router = express.Router()
const { validarcampos } = require('../middlewares/validarcampos')

const { 
    todoslosusuarios,
    usuarioporid,
    deletebyid,
    agregarusuario,
    actualizabyid } = require('../controllers/usuario')


router.get('/todos',todoslosusuarios)

router.get('/usuariobyid/:id',[check('id','No es un id valido').isMongoId(),validarcampos],usuarioporid)

router.delete('/deletebyid/:id',[check('id','No es un id valido').isMongoId(),validarcampos],deletebyid)

router.post('/agregar',[
    check('nombre','El campo Nombre es requerido!').notEmpty(),
    check('nombre','Establece el Nombre en un formato adecuado').not().isString(),
    check('edad','El campo Edad es requerido!').notEmpty(),
    check('edad','Establece la Edad en un formato adecuado').not().isInt(),
    check('email','El campo Email es requerido!').notEmpty(),
    check('email','Establece el Email en un formato adecuado').isEmail(),
    validarcampos
    ]
    ,agregarusuario)

router.put('/actualizabyid/:id',[check('id','No es un id valido').isMongoId(),validarcampos],actualizabyid)

module.exports = router