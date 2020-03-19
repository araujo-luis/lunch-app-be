import { Router } from 'express';
import LunchController from '../controllers/LunchController';

const LunchRoute = Router();

LunchRoute.get('/', LunchController.getRandomLunch);

LunchRoute.post('', LunchController.createLunch);

export default LunchRoute;