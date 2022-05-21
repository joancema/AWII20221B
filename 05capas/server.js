const express =  require('express');
const cors=  require('cors');
const { dbConnection } = require('./database/config');

class Server
{
    constructor(){
        this.app = express.Router();
        this.router = express.Router();
        this.port = process.env.PORT;
        this.paths = {
            productos: '/api/productos'
        }
        this.conectarDB();
        this.middlewares();
        this.routes();
        // localhost:3000/v2/sextob/api/productos
        this.router.use('/v2/sextob', this.app);
        this._express = express().use(this.router);
    }
    async conectarDB(){
        await dbConnection()
    }
    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
    }
    routes(){
            this.app.use(this.paths.productos 
                , require('./routes/productos') )
    }
    listen(){
        this._express.listen( this.port, ()=>{
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        } )
    }
}

module.exports = Server;