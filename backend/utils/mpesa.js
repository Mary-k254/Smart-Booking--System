const axios = require('axios');

exports.stkPush = async (phone, amount) => {
  // Mock M-Pesa Daraja API Call
  // In production, use OAuth token and actual endpoint
  return {
    CheckoutRequestID: 'ws_CO_' + Date.now(),
    ResponseCode: '0',
    ResponseDescription: 'Success'
  };
};

exports.verifyCallback = (payload, signature) => {
  // Implement HMAC verification
  return true;
};