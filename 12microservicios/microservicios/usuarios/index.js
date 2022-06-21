const app = require('./src/app')

app.listen(process.env.PORT, ()=>{
    console.log(`Microservicio de usuarios,
     corriendo en puerto ${process.env.PORT}`);
})