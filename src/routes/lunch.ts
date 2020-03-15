import { Router } from 'express';
import { getRandomLunch } from '../controllers/lunch';
const router = Router();

router.get('/lunch', getRandomLunch)

export default router;