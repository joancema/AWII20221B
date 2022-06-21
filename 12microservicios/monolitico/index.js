const servidor  = require('./src/app');
servidor.listen(process.env.PORT||2500, ()=>{
    console.log(`Servicio monolītico corriendo...
     en el puerto ${process.env.PORT}`);
})