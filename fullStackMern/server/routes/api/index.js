import { Router } from 'express';
import { getGoogleBooks } from './searchBooks.js';
import { addbook, getfavbook, deletefavbook } from '../../controller/addbook.js';

const router = Router();

router.get('/searchBooks', getGoogleBooks);
router.post('/addbook', addbook);
router.get('/getfavbook', getfavbook);
router.delete('/deletefavbook/:id', deletefavbook)

export default router;
