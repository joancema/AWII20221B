class Persona{
    constructor(nombre, apellido){
        this.nombre=nombre;
        this.apellido=apellido;
    }
    getNombreCompleto(){
        return `${this.nombre} ${this.apellido}`
    }
}

class Estudiante extends Persona{
    
}

const persona = new Persona('Homero','Simpson');

console.log(persona.getNombreCompleto());