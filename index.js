const express = require('express')
const mongoose = require('mongoose')
const usandolasrutas = require('./routes/usuarios')

const app = express()
app.use(express.json())
app.use('/crud',usandolasrutas)

app.listen('3000',()=>{
    console.log(`El servicio esta corriendo http://localhost:3000`)
})

mongoose.connect("mongodb://localhost:27017",(err)=>{
    err ? console.log("Algo salio mal en la conexion !!") : console.log("Conexión exitosa !!")
})