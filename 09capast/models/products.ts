import mongoose from 'mongoose';
import { IProducto } from '../interfaces/';
const { Schema, model } = mongoose;

const ProductoSchema: mongoose.Schema = 
 new Schema<IProducto>({
    nombre:{
        type:String,
        required:true,
        unique:true
    },
    estado:{
        type:Boolean,
        default:true,
        required:true
    },
    precio:{
        type:Number,
        default:0
    },
    costo:{
        type:Number,
        default:0
    },
    minimo:{
        type:Number,
        default:0
    },
    stock:{
        type:Number,
        default:0
    }

})

const Producto 
= mongoose.model<IProducto>('productos', ProductoSchema);

export {Producto};
