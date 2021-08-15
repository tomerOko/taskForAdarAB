import express from 'express';
import controller from '../controllers/chatController';

const router = express.Router();

router.post('/create/book', controller.createBook);
router.get('/get/books', controller.getAllBooks);

export default router;
