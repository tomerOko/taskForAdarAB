import express from 'express';
import controller from '../controllers/chatController';

const router = express.Router();

router.post('/create/message', controller.createUserMessage);
router.get('/get/books', controller.getAllBooks);

export default router;
