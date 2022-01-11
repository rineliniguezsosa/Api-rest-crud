const express = require('express')
const router = express.Router()
const Modelusuario = require('../models/Usuarios')


router.get('/home',(req,res)=>{
    res.send("rinel")
})

module.exports = router;