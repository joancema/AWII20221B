const persona = 
{
    nombre:"AndrEs",
    apellido:"AlcIvar",
    esEstudiante:false,
    geolocalizacion:{
        lat:123.232,
        lng:23.234234,
    },
    getNombreCompleto: ()=>{
        return `${this.nombre} ${this.apellido}`
    }
}

    this.nombre="John";
    this.apellido="Cevallos";

 console.log(persona.getNombreCompleto())

function mostrarDatos({ nombre, apellido, geolocalizacion:{ lat,lng }, getNombreCompleto })
{
    
    // console.log(nombre)
    // console.log(apellido)
    // console.log(lat)
    // console.log(lng)
    console.log(getNombreCompleto())
    
}
    
mostrarDatos(persona)

//joancemac@gmail.com