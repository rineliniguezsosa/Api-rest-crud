const express = require('express')
const mongoose = require('mongoose')
const usandolasrutas = require('./routes/usuarios')
require('dotenv').config()

const app = express()
app.use(express.json())
app.use('/crud',usandolasrutas)

app.listen(process.env.PORT,()=>{
    console.log(`El servicio esta corriendo http://localhost:3000`)
})

mongoose.connect("mongodb+srv://rinel:1234@cluster01restapi.phchc.mongodb.net/test",(err)=>{
    err ? console.log("Algo salio mal en la conexion !!") : console.log("Conexión exitosa !!")
})