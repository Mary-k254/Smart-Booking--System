const express = require('express');
const router = express.Router();
const driverController = require('../controllers/driver.controller');
const authMiddleware = require('../middleware/auth.middleware');

router.post('/status', authMiddleware, driverController.toggleStatus);
router.get('/earnings', authMiddleware, driverController.getEarnings);
router.get('/trips', authMiddleware, driverController.getDriverTrips);

module.exports = router;