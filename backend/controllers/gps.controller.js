const gpsService = require('../services/gps.service');

exports.updateLocation = async (req, res, next) => {
  try {
    await gpsService.updateLocation(req.user.id, req.body);
    res.json({ success: true, message: 'Location updated' });
  } catch (error) {
    next(error);
  }
};

exports.trackVehicle = async (req, res, next) => {
  try {
    const location = await gpsService.getVehicleLocation(req.params.vehicleId);
    res.json({ success: true, data: location });
  } catch (error) {
    next(error);
  }
};