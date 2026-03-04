const db = require('../config/database');

exports.calculateFare = async (pickup, dropoff, routeId) => {
  // Use MySQL ST_Distance_Sphere for distance in meters
  const sql = `
    SELECT ST_Distance_Sphere(POINT(?, ?), POINT(?, ?)) / 1000 as km, base_fare_per_km 
    FROM routes WHERE id = ?
  `;
  const [rows] = await db.query(sql, [pickup.lng, pickup.lat, dropoff.lng, dropoff.lat, routeId]);
  const { km, base_fare_per_km } = rows[0];
  return { distance_km: km.toFixed(2), fare_amount: (km * base_fare_per_km).toFixed(2) };
};

exports.getHistory = async (userId) => {
  const [rows] = await db.query('SELECT * FROM bookings WHERE passenger_id = ? OR driver_id = ?', [userId, userId]);
  return rows;
};