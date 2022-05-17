const { Router }= require('express');
const { check} =  require('express-validator');

const {
    crearProducto,
    actualizarProducto,
    borrarProducto,
    obtenerProducto,
    obtenerProductos
} = require('../controllers').Producto;


const { validarCampos } = require('../middlewares');

const router  = Router();

router.get('/', obtenerProductos );
router.get('/:id' , check('id','El id no es válidio').isMongoId()
, validarCampos  , obtenerProducto );
router.post('/', check('nombre','El nombre es requerido').not().isEmpty() 
, validarCampos ,crearProducto);
router.put('/:id', check('id', 'No es un ID válido').isMongoId() 
, validarCampos , actualizarProducto);
router.delete('/:id', 
check('id', 'No es un id válido').isMongoId()
,validarCampos , borrarProducto);

module.exports = router;