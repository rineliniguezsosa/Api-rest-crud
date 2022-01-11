const express = require('express')
const router = require('./routes/usuarios')
const mongoose = require('mongoose')
const app = express()
const port = 3000;

app.use('/crud',router)

app.listen(port,()=>{
    console.log(`El servicio esta corriendo http://localhost:${port}`)
})

mongoose.connect("mongodb://localhost:27017",(err)=>{
    err ? console.log("Algo salio mal en la conexion !!") : console.log("Conexión exitosa !!")
})