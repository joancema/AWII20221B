"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const server_1 = require("./server");
const server = new server_1.Server();
server.listen();
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
