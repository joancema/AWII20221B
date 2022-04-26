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



function buscarPlatoPorId(id){
    return new Promise(( resolve, reject )=>{
        const plato  = platos.find((plato)=> { return plato.id=== id; });
        if (!plato)
        {
            const error =  new Error();
            error.message=`El plato con id ${id} no ha sido encontrado`;
            reject(error);
        }
        resolve(plato);

    })
}
function buscarRestaurantePorId(plato){
    return new Promise((resolve, reject)=>{
        const restaurante= restaurantes.find((restaurante)=> restaurante.id===plato.idrestaurante );
        if (!restaurante)
        {
            const error= new Error();
            error.message = `El restaurante con id ${id} no ha sido encontrado`;
            reject(error);
        }
        plato.restaurante= restaurante;
        delete plato.idrestaurante;
        resolve(plato);

    })

}
// function buscarRestaurantePorId(id){
//     return new Promise((resolve, reject)=>{
//         const restaurante= restaurantes.find((restaurante)=> restaurante.id===id );
//         if (!restaurante)
//         {
//             const error= new Error();
//             error.message = `El restaurante con id ${id} no ha sido encontrado`;
//             reject(error);
//         }
//         resolve(restaurante);

//     })

// }


//let auxiliarPlato={};

buscarPlatoPorId(3)
.then((plato)=>{
    auxiliarPlato = plato;
    return buscarRestaurantePorId(plato);
    //return buscarRestaurantePorId(plato.idrestaurante);
})
.then((plato)=>{
    // auxiliarPlato.restaurante =  restaurante;
    // delete auxiliarPlato.idrestaurante;
    // console.log(auxiliarPlato)
    console.log(plato)
})
// .then(()=>{

// })
.catch((error)=>{
    console.log(error.message)
})


// buscarRestaurantePorId(3).then((restaurante)=>{
//     console.log(restaurante)
// }).catch((error)=>{
//     console.log(error.message)
// })