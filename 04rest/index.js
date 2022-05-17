const express= require('express');
const cors =  require('cors');
const { request, response } = require('express');

const app =  express();
const ruta = express.Router();
const PUERTO= 2500;
let comidas = [];
app.use(cors()).use(express.json());

ruta.get('/', (req,res)=>{
    res.status(200).send(comidas);
})

ruta.post('/', (req= request, res)=>{
    const {body} = req;
    if ( comidas.filter((c)=> c.codigo===body.codigo).length>0  )
    {
        return res.status(400).send({
            message:"El plato ya se encuentra",
            response: body
        })
    }
    comidas.push(body);
    res.status(200).send({
        message:"Se insertó correctamente",
        response: body
    })

})
ruta.put('/', (req,res)=>{
    const {codigo,nombre} =  req.body;

    if ( comidas.filter(c=> c.codigo=== codigo).length ===0  )
    {
        return res.status(400).send({
            message:`No se encuentra ese código`,
        })
    }

    let comida=  comidas.filter(c=> c.codigo=== codigo)[0]
    comida.nombre = nombre; 
    res.status(200).send({
        message:`Dato modificado con éxito`,
        response: { codigo,nombre }
    })


})
ruta.delete('/:codigo', (req,res)=>{
    const { codigo } =  req.params;
    comidas =  comidas.filter(c=> c.codigo !== codigo);
    res.status(200).send({
        message:`Eliminamos el elemento con éxito`
    })

})
ruta.get('/:codigo', (req,res)=>{
    const { codigo } =  req.params;
    let comida =  comidas.filter(c=> c.codigo === codigo);
    if (comida.length===0)
    {
        res.status(400).send({
            message:`No se pudo encontrar el código`
        })
    }
    else
    {
        res.status(200).send({
            message:`dato obtenido de forma individual`,
            response: comida[0]
        })
    }
})

app.use('/comida', ruta);

app.listen(PUERTO, ()=>{
    console.log(`Servidor corriendo en puerto ${PUERTO}`);
})
