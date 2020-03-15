import express, { Application } from "express";
import router from "./routes";

const app: Application = express();

app.use(express.json());

const PORT: any = process.env.PORT || 3000;
app.use(router)
app.listen(PORT, () => console.log(`listening on port ${PORT}`));