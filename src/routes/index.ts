import { Router } from 'express';
import lunch from './LunchRoute';

const router = Router();

router.use('/lunch', lunch);

export default router;