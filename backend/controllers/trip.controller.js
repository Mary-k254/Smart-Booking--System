const tripService = require('../services/trip.service');

exports.calculateFare = async (req, res, next) => {
  try {
    const { pickup, dropoff, routeId } = req.query;
    const fare = await tripService.calculateFare(pickup, dropoff, routeId);
    res.json({ success: true, data: fare });
  } catch (error) {
    next(error);
  }
};

exports.getTripHistory = async (req, res, next) => {
  try {
    const history = await tripService.getHistory(req.user.id);
    res.json({ success: true, data: history });
  } catch (error) {
    next(error);
  }
};