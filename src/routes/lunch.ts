import { Router } from 'express';
import LunchController from '../controllers/LunchController';

const router = Router();

router.get('/', LunchController.getRandomLunch);

router.get('', LunchController.createLunch);

export default router;