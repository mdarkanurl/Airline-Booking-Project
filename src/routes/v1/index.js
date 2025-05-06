const express = require('express');
const { infoControolers, airplaneControllers } = require('../../controllers');
const router = express.Router();

router.use('/airplanes', airplaneControllers.createAirplane);

router.get('/info', infoControolers.info);

module.exports = router;