const paymentService = require('../services/payment.service');

exports.initiatePayment = async (req, res, next) => {
  try {
    const payment = await paymentService.initiateMpesa(req.user.id, req.body);
    res.json({ success: true, data: payment });
  } catch (error) {
    next(error);
  }
};

exports.mpesaCallback = async (req, res, next) => {
  try {
    await paymentService.handleCallback(req.body);
    res.json({ ResultCode: 0, ResultDesc: 'Accepted' });
  } catch (error) {
    next(error);
  }
};

exports.getPaymentStatus = async (req, res, next) => {
  try {
    const status = await paymentService.getStatus(req.params.id);
    res.json({ success: true, data: status });
  } catch (error) {
    next(error);
  }
};