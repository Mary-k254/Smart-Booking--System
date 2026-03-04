const authService = require('../services/auth.service');
const logger = require('../utils/logger');

exports.register = async (req, res, next) => {
  try {
    const user = await authService.register(req.body);
    res.status(201).json({ success: true, data: user });
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const token = await authService.login(req.body);
    res.json({ success: true, token });
  } catch (error) {
    next(error);
  }
};

exports.verifyOtp = async (req, res, next) => {
  try {
    await authService.verifyOtp(req.body);
    res.json({ success: true, message: 'Phone verified' });
  } catch (error) {
    next(error);
  }
};