const express = require('express');
const router = express.Router();
const tripController = require('../controllers/trip.controller');
const authMiddleware = require('../middleware/auth.middleware');

router.get('/calculate-fare', authMiddleware, tripController.calculateFare);
router.get('/history', authMiddleware, tripController.getTripHistory);

module.exports = router;