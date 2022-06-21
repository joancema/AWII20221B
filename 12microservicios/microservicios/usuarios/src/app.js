const express = require('express');
const app = express();

const respuesta  ={
    data:[],
    arquitectura:`Microservicio`,
    descripcion:'Usuarios micro'
}
app.get('/api/v2/usuarios',(req,res)=>{
    respuesta.data=[]
    respuesta.data.push("Invitado","Especial","Administrador");
    console.log(`Obtener datos de usuarios`);
    return res.send(respuesta);  
})
module.exports = app;