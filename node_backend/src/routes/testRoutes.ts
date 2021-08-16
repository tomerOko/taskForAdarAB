import express from 'express';
import controller from '../controllers/testControler';
import { Connection, MysqlError } from "mysql";

const router = express.Router();

router.get('/connection', controller.checkServerConection)

router.post('/a', controller.checkStringiyResponse)

router.get('/async', controller.checkResponseAsPromis)

router.get('/fromdb', controller.checkResponsFromDB)

export default router;
