const db = require('../config/database');
const tripService = require('./trip.service');

exports.createBooking = async (passengerId, data) => {
  const fareCalc = await tripService.calculateFare(data.pickup, data.dropoff, data.routeId);
  const [result] = await db.query('INSERT INTO bookings (passenger_id, route_id, pickup_location, dropoff_location, distance_km, fare_amount) VALUES (?, ?, ST_GeomFromText(?), ST_GeomFromText(?), ?, ?)', 
    [passengerId, data.routeId, `POINT(${data.pickup.lng} ${data.pickup.lat})`, `POINT(${data.dropoff.lng} ${data.dropoff.lat})`, fareCalc.distance_km, fareCalc.fare_amount]);
  return { id: result.insertId, ...data, ...fareCalc };
};

exports.getBookings = async (userId, role) => {
  const column = role === 'driver' ? 'driver_id' : 'passenger_id';
  const [rows] = await db.query(`SELECT * FROM bookings WHERE ${column} = ?`, [userId]);
  return rows;
};

exports.updateStatus = async (bookingId, status) => {
  await db.query('UPDATE bookings SET status = ?, completed_at = IF(?="completed", NOW(), NULL) WHERE id = ?', [status, status, bookingId]);
  return { id: bookingId, status };
};

exports.addReview = async (bookingId, reviewerId, data) => {
  const [result] = await db.query('INSERT INTO reviews (booking_id, reviewer_id, target_id, comment, rating) VALUES (?, ?, ?, ?, ?)', 
    [bookingId, reviewerId, data.targetId, data.comment, data.rating]);
  return { id: result.insertId, ...data };
};