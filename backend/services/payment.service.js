const db = require('../config/database');
const mpesa = require('../utils/mpesa');

exports.initiateMpesa = async (userId, data) => {
  const mpesaRes = await mpesa.stkPush(data.phone, data.amount);
  const [result] = await db.query('INSERT INTO payments (booking_id, amount, status) VALUES (?, ?, ?)', 
    [data.bookingId, data.amount, 'initiated']);
  return { id: result.insertId, mpesa_receipt: mpesaRes.CheckoutRequestID };
};

exports.handleCallback = async (data) => {
  // Verify signature and update payment status
  await db.query('UPDATE payments SET status = ?, mpesa_receipt = ? WHERE booking_id = ?', 
    ['completed', data.MpesaReceiptNumber, data.PhoneNumber]); // Simplified logic
};

exports.getStatus = async (paymentId) => {
  const [rows] = await db.query('SELECT * FROM payments WHERE id = ?', [paymentId]);
  return rows[0];
};