const db = require('../config/database');

exports.toggleStatus = async (userId, isOnline) => {
  await db.query('UPDATE drivers SET is_online = ? WHERE user_id = ?', [isOnline, userId]);
  return { is_online: isOnline };
};

exports.getEarnings = async (userId) => {
  const [rows] = await db.query('SELECT SUM(fare_amount) as total FROM bookings WHERE driver_id = ? AND status = "completed"', [userId]);
  return rows[0];
};

exports.getTrips = async (userId) => {
  const [rows] = await db.query('SELECT * FROM bookings WHERE driver_id = ? ORDER BY booked_at DESC', [userId]);
  return rows;
};