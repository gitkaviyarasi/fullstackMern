import { Router } from 'express';
import { getGoogleBooks } from './searchBooks.js';

const router = Router();

router.use('/searchBooks', getGoogleBooks);

export default router;
