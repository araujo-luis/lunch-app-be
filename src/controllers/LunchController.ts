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
            res.status(404).send("error" + error);
        }
    }

    public static createLunch = async (req: Request, res: Response) => {

        const { plate_name, plate_description, restaurant_name, category, price, plate_image } = req.body;

        const lunch = new Lunch();

        lunch.plate_name = plate_name;
        lunch.plate_description = plate_description;
        lunch.restaurant_name = restaurant_name;
        lunch.category = category;
        lunch.price = price;
        lunch.plate_image = plate_image;

        const lunchRepository = getRepository(Lunch);

        try {
            await lunchRepository.save(lunch);
        } catch (error) {
            res.status(404).send("Error request " + error);

        }
        res.status(201).send({"code": "01", "status": "Created"});

    }
}
export default LunchController;