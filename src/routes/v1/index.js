import express from 'express';
import { infoController } from '../../controllers/index.js';
import airplaneRoutes from './airplane-routes.js';
const router = express.Router();

router.use('/airplanes', airplaneRoutes);

router.get('/info', infoController)

export default router;