const db = require('../config/database');

exports.getProfile = async (userId) => {
  const [users] = await db.query('SELECT id, phone, role, created_at FROM users WHERE id = ?', [userId]);
  return users[0];
};

exports.updateProfile = async (userId, data) => {
  await db.query('UPDATE users SET ? WHERE id = ?', [data, userId]);
  return this.getProfile(userId);
};