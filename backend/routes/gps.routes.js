const express = require('express');
const router = express.Router();
const gpsController = require('../controllers/gps.controller');
const authMiddleware = require('../middleware/auth.middleware');

router.post('/update', authMiddleware, gpsController.updateLocation);
router.get('/track/:vehicleId', gpsController.trackVehicle);

module.exports = router;