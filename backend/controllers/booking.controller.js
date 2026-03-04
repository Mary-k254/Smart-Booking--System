const bookingService = require('../services/booking.service');

exports.createBooking = async (req, res, next) => {
  try {
    const booking = await bookingService.createBooking(req.user.id, req.body);
    res.status(201).json({ success: true, data: booking });
  } catch (error) {
    next(error);
  }
};

exports.getBookings = async (req, res, next) => {
  try {
    const bookings = await bookingService.getBookings(req.user.id, req.query.role);
    res.json({ success: true, data: bookings });
  } catch (error) {
    next(error);
  }
};

exports.updateStatus = async (req, res, next) => {
  try {
    const booking = await bookingService.updateStatus(req.params.id, req.body.status);
    res.json({ success: true, data: booking });
  } catch (error) {
    next(error);
  }
};

exports.addReview = async (req, res, next) => {
  try {
    const review = await bookingService.addReview(req.params.id, req.user.id, req.body);
    res.json({ success: true, data: review });
  } catch (error) {
    next(error);
  }
};