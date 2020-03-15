import { Request, Response } from 'express';

class LunchController {
    public static getRandomLunch = (req: Request, res: Response) => {
        res.send("This is your random lunch");
    }
}
export default LunchController;