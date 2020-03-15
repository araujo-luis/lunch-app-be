import express, { Application } from "express";
import router from "./routes";
import cors from 'cors';
import { createConnection } from "typeorm";
import config from './helpers/pgconnection';
import 'reflect-metadata';

const PORT: any = process.env.PORT || 4000;

createConnection(config).then(async () => {
    const app: Application = express();
    app.use(express.json());
    app.use('/', router);
    app.use(cors());
    app.listen(PORT, () => console.log(`listening on port ${PORT}`));

}).catch(error => console.log("Connection Error: " + error)) 
