import express, { Application, Request, Response, NextFunction } from "express";

const app: Application = express();

app.use(express.json());

const PORT: any = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`listening on port ${PORT}`));