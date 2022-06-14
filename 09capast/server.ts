import express, { Router, Express } from "express";
import cors from 'cors';

import { router as products } from './routes/products'
import { dbConnection } from "./database/config";



class Server {
    app: Router;
    router: Router;
    port:Number;
    paths: { [ key:string ]:string };
    private _express: Express;
    constructor(){
        this.app = Router();
        this.router = Router();
        this.port= Number(process.env["PORT"]);
        this.paths = {
            productos: '/api/productos',
        }
        this.conectarDB();
        this.middleware();
        this.routes();
        this.router.use('/v2/sextob', this.app);
        this._express = express().use(this.router);
    }
    private async conectarDB(){
        await dbConnection()
    }
    private middleware(){
        this.app.use(cors());
        this.app.use(express.json());
    }
    private routes(){
        this.app.use(this.paths.productos , products )
    }
    listen(){
        this._express.listen(this.port, ()=>{
            console.log(`Servidor corriendo en http://localhost:${this.port}/v2/sextob/api/productos`);
            
        })
    }
}

export {Server}