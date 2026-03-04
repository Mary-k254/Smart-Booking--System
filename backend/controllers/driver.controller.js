const driverService = require('../services/driver.service');

exports.toggleStatus = async (req, res, next) => {
  try {
    const status = await driverService.toggleStatus(req.user.id, req.body.is_online);
    res.json({ success: true, data: status });
  } catch (error) {
    next(error);
  }
};

exports.getEarnings = async (req, res, next) => {
  try {
    const earnings = await driverService.getEarnings(req.user.id);
    res.json({ success: true, data: earnings });
  } catch (error) {
    next(error);
  }
};

exports.getDriverTrips = async (req, res, next) => {
  try {
    const trips = await driverService.getTrips(req.user.id);
    res.json({ success: true, data: trips });
  } catch (error) {
    next(error);
  }
};