function calcular(n1, n2, operador)
{
    switch (operador) {
        case '+':
            return n1+n2;
        case '-':
            return n1-n2;
        case '*':
            return n1*n2;
        case '/':
            return n1/n2;
        default:
            return 0;
    }
}
function saludar(nombre){
    console.log(`hola ${nombre}`)
}

module.exports = {
    variable: 100,
    funcion1: calcular,
    saludar
};