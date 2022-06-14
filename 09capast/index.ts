import { config } from 'dotenv'
config();
import { Server } from './server'
const server = new Server();
server.listen()















// // const express = require('express')
// import express, { Request, Response } from 'express';

// const app = express()
// console.log('ok cAMBIOS')

// app.get('/', (req: Request  ,res: Response)=>{
//     res.json({
//         msg:'ok'
//     })

// })

// app.listen(2500, ()=>{
//     console.log(`ejecutando en puerto 2500`);
    
// })
