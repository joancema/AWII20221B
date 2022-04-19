const animales=[
    "perro",
    "gato",
    "tigre",
    "tortuga",
    "conejo",
    function(){
        return "perico"
    }
]

console.log(animales[5]())

const funcionx = animales[5];
funcionx();


// const domesticos=  [ ...animales    ];


// const todosLosAnimales= [ ...domesticos, ...animales ]
// console.log(todosLosAnimales)

// const domesticos= animales;
// domesticos[2]="pato";
// console.log(animales)


// animales[0]="chancho";
// console.log(animales)