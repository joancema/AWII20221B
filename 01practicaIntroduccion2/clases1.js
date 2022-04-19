const persona = 
{
    nombre:"AndrEs",
    apellido:"AlcIvar",
    esEstudiante:false,
    geolocalizacion:{
        lat:123.232,
        lng:23.234234,
    },
    getNombreCompleto(){
        return `${this.nombre} ${this.apellido}`
    }
}

function mostrarDatos({ nombre, apellido, geolocalizacion:{ lat,lng } })
{
    console.log(nombre)
    console.log(apellido)
    console.log(lat)
    console.log(lng)
}
    
mostrarDatos(persona)

//joancemac@gmail.com