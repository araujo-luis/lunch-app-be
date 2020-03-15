import { Request, Response } from 'express';

export const getRandomLunch = (req: Request, res: Response) =>{
    res.send("This is your random lunch");
}