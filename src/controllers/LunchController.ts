import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Lunch from '../entities/Lunch';
import { validate } from 'class-validator';
class LunchController {
    public static getRandomLunch = async (req: Request, res: Response) => {

        const lunchRepository = getRepository(Lunch);
        try {
            const lunch = await lunchRepository.createQueryBuilder('lunch').orderBy("RANDOM()").getOne();
            if (lunch) res.send(lunch);
            else res.status(404);
        } catch (error) {
            res.status(404).send({"code": "404", "status": "Not found"});
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

        const errors = await validate(lunch);
        if(errors){
            res.status(400).send({"code": "400", "status": "Validation Error. Please add all required fields " + errors });
            return;
        }
        const lunchRepository = getRepository(Lunch);

        try {
            await lunchRepository.save(lunch);
        } catch (error) {
            res.status(404).send({"code": "404", "status": "Creation process error"});

        }
        res.status(201).send({"code": "201", "status": "Created"});

    }
}
export default LunchController;