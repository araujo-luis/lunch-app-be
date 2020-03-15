import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Lunch from '../entities/Lunch';
class LunchController {
    public static getRandomLunch = async (req: Request, res: Response) => {

        const lunchRepository = getRepository(Lunch);
        try {
            const lunch = await lunchRepository.createQueryBuilder('lunch').orderBy("RANDOM()").getOne();
            if (lunch) res.send(lunch);
            else res.status(404);
        } catch (error) {
            res.send("error" + error);
        }
    }
}
export default LunchController;