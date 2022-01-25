const Modelusuario = require('../models/Usuarios')


const todoslosusuarios = async ()=>{
    const todos = await Modelusuario.find({})
    try{
        res.send(todos)
    }catch(err){
        res.send("Message:Algo salio mal")
    }
}