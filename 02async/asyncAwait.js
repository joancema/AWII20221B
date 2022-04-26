const platos =[
    {
        id:1,
        descripcion:'Chaulafan',
        idrestaurante:1,
    },
    {
        id:2,
        descripcion:'Arroz con CamarOn',
        idrestaurante:1,
    },
    {
        id:3,
        descripcion:'Parrillada',
        idrestaurante:2,
    },
    {
        id:4,
        descripcion:'Chuzo',
        idrestaurante:2,
    },
]
const restaurantes=[
    {
        id:1,
        nombre:'Chifa Manta'
    },
    {
        id:2,
        nombre:'La parrilla del Loco'
    },
]



async function buscarPlatoPorId(id)
{
    const plato =  platos.find((plato)=> plato.id === id );
    if (!plato)
    {
        const error =  new Error();
        error.message= `El plato con id ${id} no pudo ser encontrado`;
        throw error;
    }
    return plato;
}

async function buscarRestaurantePorId(id)
{
    const restaurante = restaurantes.find((restaurante)=> restaurante.id=== id);
    if (!restaurante)
    {
        const error = new Error();
        error.message = `El restaurante con id ${id} no pudo ser encontrado`;
        throw error;
    }
    return restaurante;
}

async function main()
{
    try {
        const plato = await buscarPlatoPorId(1);
        const restaurante =  await buscarRestaurantePorId(plato.idrestaurante);
        plato.restaurante= restaurante;
        console.log(plato)
    } catch (error) {
        console.log(error.message)        
    }
};


main();



