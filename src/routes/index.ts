import { Router } from 'express';
import lunch from './lunch';

const router = Router();

router.use('/lunch', lunch);

export default router;