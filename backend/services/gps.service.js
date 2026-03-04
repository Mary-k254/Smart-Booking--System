const db = require('../config/database');

exports.updateLocation = async (userId, data) => {
  // Find vehicle linked to driver
  const [vehicles] = await db.query('SELECT id FROM vehicles WHERE driver_id = ?', [userId]);
  if (vehicles.length) {
    await db.query('UPDATE vehicles SET current_location = ST_GeomFromText(?), last_updated = NOW() WHERE id = ?', 
      [`POINT(${data.lng} ${data.lat})`, vehicles[0].id]);
  }
};

exports.getVehicleLocation = async (vehicleId) => {
  const [rows] = await db.query('SELECT ASTEXT(current_location) as loc, last_updated FROM vehicles WHERE id = ?', [vehicleId]);
  return rows[0];
};