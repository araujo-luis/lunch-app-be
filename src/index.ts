import express, { Application } from "express";
import router from "./routes";
import cors from 'cors';
import { createConnection } from "typeorm";
import config from './helpers/pgconnection';
const app: Application = express();

app.use(express.json());
app.use(router);
app.use(cors());

const PORT: any = process.env.PORT || 4000;
try {
     createConnection(config);
  } catch (error) {
    console.log('Error while connecting to the database', error);
    
  }
app.listen(PORT, () => console.log(`listening on port ${PORT}`));