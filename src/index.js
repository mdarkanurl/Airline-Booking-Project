import express from 'express';
const app = express();
import { PORT, logger } from './config/index.js';

// Middelwares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import apiRoutes from './routes/index.js';

app.use('/api', apiRoutes);

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
    logger.info('Successfully started the server');
});