import { connect }  from 'mongoose';

const dbConnection = async () =>{
    try {
        
        await  connect(process.env["MONGODB_CNN"] || "")
        console.log(`Base de datos ejecutándose sin problema`);
    } catch (error) {
        console.log(error);
        throw new Error(`Base de datos no disponible`)        
    }
}

export  {
    dbConnection
}