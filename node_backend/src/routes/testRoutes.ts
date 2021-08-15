import express from 'express';
import controller from '../controllers/testControler';
import { Connection, MysqlError } from "mysql";

const router = express.Router();

router.get('/connection', controller.checkServerConection)

router.post('/strigify', controller.checkStringiyResponse)

router.get('/asny', controller.checkResponseAsPromis)

export default router;
