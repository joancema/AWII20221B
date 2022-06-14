"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const controllers_1 = require("../controllers");
const { obtenerProducto, obtenerProductos, crearProducto } = controllers_1.Producto;
const middlewares_1 = __importDefault(require("../middlewares"));
const { validarCampos } = middlewares_1.default;
const router = (0, express_1.Router)();
exports.router = router;
router.get('/', obtenerProductos);
router.get('/:id', (0, express_validator_1.check)('id', 'El ID de mongo no es vALIDO').isMongoId(), validarCampos, obtenerProducto);
router.post('/', (0, express_validator_1.check)('nombre', 'Es obligatorio el nombre').not().isEmpty(), validarCampos, crearProducto);
