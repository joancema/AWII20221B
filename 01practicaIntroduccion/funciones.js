function operacion(n1, n2, operacion)
{
    switch(operacion)
    {
        case "sumar":
            return n1+n2;
        case "restar":
            return n1-n2;
        case "multiplicar":
            return n1*n2;
        case "dividir":
            return n1/n2;
        default:
            return 0;
    }
}

function saludar()
{
    console.log(`hola`)
}
module.exports= {
    funcion1: operacion,
    variable: 5,
    saludar,
}