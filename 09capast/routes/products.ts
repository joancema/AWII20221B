import {Router} from 'express';
import { check } from 'express-validator'

import { Producto } from '../controllers';

const { obtenerProducto, obtenerProductos, crearProducto } =  Producto;

import funciones from '../middlewares'
const { validarCampos } = funciones;


const router = Router();

router.get('/',  obtenerProductos)
router.get('/:id'
, check('id','El ID de mongo no es vALIDO').isMongoId()
, validarCampos 
, obtenerProducto);

router.post('/'
,check('nombre','Es obligatorio el nombre').not().isEmpty()
, validarCampos
, crearProducto)


export {router};

