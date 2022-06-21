const express = require('express');
const app = express();

const respuesta  ={
    data:[],
    arquitectura:`Microservicio`,
    descripcion:'Clientes micro'
}
app.get('/api/v2/clientes',(req,res)=>{
    respuesta.data=[]
    respuesta.data.push("Consumidor final","Moroso");
    console.log(`Obtener datos de clientes`);
    return res.send(respuesta);  
})
module.exports = app;