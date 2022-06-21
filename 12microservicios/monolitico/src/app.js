const express = require('express');
const app = express();

const respuesta  ={
    data:[],
    arquitectura:`Monolítico`,
    descripcion:'Aquí van a estar todos los servicios'
}
app.use((req,res,next)=>{
    respuesta.data=[];
    next();
})
app.get('/api/v1/usuarios',(req,res )=>{
    respuesta.data.push("Administrador", "Invitado","Gerente");
    return res.send(respuesta)
})
app.get('/api/v1/productos',(req,res)=>{
    respuesta.data.push("Coca cola", "Hot-dog","Hamburguesa");
    return res.send(respuesta)
})
app.get('/api/v1/clientes',(req,res)=>{
    respuesta.data.push("Consumidor final", "John Cevallos","Pepe Chiro");
    return res.send(respuesta)
})



module.exports = app;