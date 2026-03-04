const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/payment.controller');
const authMiddleware = require('../middleware/auth.middleware');

router.post('/initiate', authMiddleware, paymentController.initiatePayment);
router.post('/callback', paymentController.mpesaCallback);
router.get('/:id/status', authMiddleware, paymentController.getPaymentStatus);

module.exports = router;