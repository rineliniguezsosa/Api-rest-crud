const express = require('express')
const router = require('./routes/usuarios')
const app = express()
const port = 3000;

app.use('/crud',router)




app.listen(port,()=>{
    console.log(`El servicio esta corriendo http://localhost:${port}`)
})