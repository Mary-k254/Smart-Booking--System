const db = require('../config/database'); // Assumed DB config
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (data) => {
  const hash = await bcrypt.hash(data.password, 10);
  const [result] = await db.query('INSERT INTO users (phone, password_hash, role) VALUES (?, ?, ?)', 
    [data.phone, hash, data.role]);
  return { id: result.insertId, phone: data.phone };
};

exports.login = async (data) => {
  const [users] = await db.query('SELECT * FROM users WHERE phone = ?', [data.phone]);
  if (!users.length) throw new Error('Invalid credentials');
  const valid = await bcrypt.compare(data.password, users[0].password_hash);
  if (!valid) throw new Error('Invalid credentials');
  return jwt.sign({ id: users[0].id, role: users[0].role }, process.env.JWT_SECRET, { expiresIn: '1d' });
};

exports.verifyOtp = async (data) => {
  // Implement OTP logic via SMS provider
  return true;
};