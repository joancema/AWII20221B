const express = require('express');
const app = express();

const respuesta  ={
    data:[],
    arquitectura:`Microservicio`,
    descripcion:'Productos micro'
}
app.get('/api/v2/productos',(req,res)=>{
    respuesta.data=[]
    respuesta.data.push("Coca cola","Sanducha","Pizza");
    console.log(`Obtener datos de productos`);
    return res.send(respuesta);  
})
module.exports = app;