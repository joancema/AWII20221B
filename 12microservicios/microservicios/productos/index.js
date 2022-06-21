const app = require('./src/app')

app.listen(process.env.PORT, ()=>{
    console.log(`Microservicio de productos,
     corriendo en puerto ${process.env.PORT}`);
})