"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.crearProducto = exports.obtenerProducto = exports.obtenerProductos = void 0;
const models_1 = require("../models");
const obtenerProductos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { limite = '10', desde = '0' } = req.query;
    const query = { estado: true };
    const [total, productos] = yield Promise.all([
        models_1.Producto.countDocuments(query),
        models_1.Producto.find(query)
            .skip(Number(desde))
            .limit(Number(limite))
    ]);
    res.json({
        total,
        productos
    });
});
exports.obtenerProductos = obtenerProductos;
const obtenerProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const producto = yield models_1.Producto.findById(id);
    res.json(producto);
});
exports.obtenerProducto = obtenerProducto;
const crearProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const _a = req.body, { estado } = _a, body = __rest(_a, ["estado"]);
    const existeProducto = yield models_1.Producto.findOne({ nombre: body.nombre });
    if (existeProducto) {
        return res.status(400).json({
            message: `El producto con ese nombre ${body.nombre} ya se encuentra registrado`
        });
    }
    const producto = new models_1.Producto(body);
    const productoNuevo = yield producto.save();
    return res.status(201).json(productoNuevo);
});
exports.crearProducto = crearProducto;
