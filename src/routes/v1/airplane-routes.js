import express from 'express';
const router = express.Router();

import { airplaneController } from '../../controllers/index.js';

router.post('/', airplaneController.createAirplane);

export default router;