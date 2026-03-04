const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/booking.controller');
const authMiddleware = require('../middleware/auth.middleware');

router.post('/create', authMiddleware, bookingController.createBooking);
router.get('/list', authMiddleware, bookingController.getBookings);
router.put('/:id/status', authMiddleware, bookingController.updateStatus);
router.post('/:id/review', authMiddleware, bookingController.addReview);

module.exports = router;