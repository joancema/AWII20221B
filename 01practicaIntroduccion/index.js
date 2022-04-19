const { funcion1, saludar } =  require('./funciones');


console.log( funcion1(2,5,"sumar") ) ;




let variable = 25;
const inmutable= 'prueba';









const mostrarListado = (tope) =>
{
    for (let i=0;i<tope;i++)
    {
        console.log(i)
    }
}
// mostrarListado(25);
function llamarFuncionListado(fn,parametro)
{
    fn(parametro);
}

// llamarFuncionListado(mostrarListado, 5);




// variable= 30;
// inmutable='cambio';

// console.log(variable)