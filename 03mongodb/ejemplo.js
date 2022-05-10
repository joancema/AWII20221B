const mongoose =  require("mongoose");
const conexion=  "mongodb+srv://joancema:jacm1310@cluster0.x7met.mongodb.net/usuarios?retryWrites=true&w=majority";

(async ()=>{

    const conectado =  await mongoose.connect(conexion);
    const Grupo = mongoose.model("Grupo", {nombre:String});
    const grupo1 =  new Grupo({nombre:"Administradores"});
    const Permiso = mongoose.model("Permiso", {nombre:String});
    const permiso1 = new Permiso({nombre:"Guardar"});
    const permiso2 = new Permiso({nombre:"Eliminar"});

    const Usuario =  mongoose.model("Usuario", 
    {
         nombre: String,
          idgrupo: { type: mongoose.Schema.Types.ObjectId, ref:"Grupo" },
          permisos: [
              {
                  permiso:{type: mongoose.Schema.Types.ObjectId, ref:"Permiso" },
                  estado: {type:Boolean}
                   
              }
            ],
          
    });
    const grupoAlmacenado =  await grupo1.save();
    
    const usuario1=  new Usuario(
        { nombre:"Administrador",
         idgrupo: grupoAlmacenado._id,
         permisos:[
             {permiso: permiso1._id , estado:true},
             {permiso: permiso2._id , estado:true}
         ]
        })
    const usuarioAlmacenado = await usuario1.save();
    console.log(usuarioAlmacenado)
})()