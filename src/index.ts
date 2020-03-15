import express, { Application } from "express";
import router from "./routes";
import cors from 'cors';
const app: Application = express();

app.use(express.json());
app.use(router);
app.use(cors());

const PORT: any = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`listening on port ${PORT}`));