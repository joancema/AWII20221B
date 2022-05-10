const mongoose =  require("mongoose");
const conexion=  "mongodb+srv://joancema:jacm1310@cluster0.x7met.mongodb.net/aaaprueba?retryWrites=true&w=majority";

(async ()=>{
    //conectamos a la bd
    const conectado =  await mongoose.connect(conexion);
    //Definir los models
    const Grupo = mongoose.model("Grupo", {
        nombre:String,
        // usuarios:[{ type: mongoose.Schema.Types.ObjectId, ref:"Usuario" }]
    });
    const Permiso = mongoose.model("Permiso", {nombre:String});    
    const Usuario =  mongoose.model("Usuario", 
    {
         nombre: String,
          idgrupo: { type: mongoose.Schema.Types.ObjectId, ref:"Grupo" },
        //   permisos:[{type: mongoose.Schema.Types.ObjectId, ref:"Permiso" }],
          permisos: [
              {
                  permiso:{type: mongoose.Schema.Types.ObjectId, ref:"Permiso" },
                  estado: {type:Boolean}
                   
              }
            ],
          
    });
    //Instancias de los modelos
    const grupo1 =  new Grupo({nombre:"Administradores"});
    const permiso1 = new Permiso({nombre:"Guardar"});
    const permiso2 = new Permiso({nombre:"Eliminar"});
    //Almacenar grupo y permisos
    const grupoAlmacenado =  await grupo1.save();
    const permiso1Almacenado =  await permiso1.save();
    const permiso2Almacenado =  await permiso2.save();

    //instancia de Usuario
    const usuario1=  new Usuario(
        { nombre:"Administrador",
         idgrupo: grupoAlmacenado._id,
         permisos:[
             {permiso: permiso1Almacenado._id , estado:true},
             {permiso: permiso2Almacenado._id , estado:true}
         ]
        })
        //proocedemos almacenar usuario
    const usuarioAlmacenado = await usuario1.save();
    //  console.log(usuarioAlmacenado)
    //consultar la información de usuarios
    const resultado= await Usuario.find()
    .populate("idgrupo")
    .populate("permisos.permiso");
    //mostrar datos de usuario específico
    console.log(resultado[0].permisos)

})()