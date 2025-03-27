import express from 'express';
const app = express();
import { PORT, logger } from './config/index.js';

import apiRoutes from './routes/index.js';

app.use('/api', apiRoutes);

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
    logger.info('Successfully started the server');
});