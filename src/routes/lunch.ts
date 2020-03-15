import { Router } from 'express';
import LunchController from '../controllers/lunch';

const router = Router();

router.get('/', LunchController.getRandomLunch);

export default router;