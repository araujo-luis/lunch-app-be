import express, { Application } from "express";
import router from "./routes";
import cors from 'cors';
import { createConnection } from "typeorm";
import pgconnection from './helpers/pgconnection';
import 'reflect-metadata';
import bodyParser from 'body-parser'
import dotenv from 'dotenv';

dotenv.config();
const PORT: any = process.env.PORT || 4000;

createConnection(pgconnection).then(async () => {
    const app: Application = express();
    app.use(express.json());
    app.use(cors());
    app.use('/', router);
    app.use(bodyParser.json());
    app.listen(PORT, () => console.log(`listening on port ${PORT}`));

}).catch(error => console.log("Connection tet Error: " + error)) 
