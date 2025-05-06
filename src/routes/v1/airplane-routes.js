const express = require('express');
const router = express.Router();

const { airplaneController } = require('../../controllers/index.js');

router.post('/', airplaneController.createAirplane);

module.exports = router;