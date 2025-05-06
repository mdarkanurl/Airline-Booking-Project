const express = require('express');
const app = express();

const { PORT, logger } = require('./config/index.js');

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const apiRoutes = require('./routes/index.js');

app.use('/api', apiRoutes);

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
    logger.info('Successfully started the server');
});