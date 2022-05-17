const express= require('express');
const cors =  require('cors');
const { request, response } = require('express');
const PUERTO= 2500;
// localhost:2500/prueba
const app= express();

app.use(cors()).use(express.json())

app.get('/prueba', (req = request, res= response )=>{
    res.status(200).send({
        mensaje:'respuesta correcta!'
    })
})
app.use('/prueba', (req,res,next)=>{
    req.body.nombre = req.body.nombre.toUpperCase();
    next();
})
app.post('/prueba', (req = request,res= response,next)=>{
    res.status(200).send(req.body);
    next('route');
})
app.use('/prueba', (req,res,next)=>{
    res.status(200).send('middleware después de cambiar body');
})

app.listen(PUERTO, ()=>{
    console.log(`Servidor en puerto ${PUERTO}`);
})

//rest
//http
// C   POST
// R   GET
// U   PATCH, PUT
// D   DELETE
// frameworks, patrones, antipatrones, 
//principios, arquitecturas
// interoperabilidad 
