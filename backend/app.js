const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const errorMiddleware = require('./middleware/error.middleware');

// Routes
const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');
const driverRoutes = require('./routes/driver.routes');
const tripRoutes = require('./routes/trip.routes');
const bookingRoutes = require('./routes/booking.routes');
const paymentRoutes = require('./routes/payment.routes');
const gpsRoutes = require('./routes/gps.routes');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Mount Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/drivers', driverRoutes);
app.use('/api/trips', tripRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/gps', gpsRoutes);

// Error Handling
app.use(errorMiddleware);

module.exports = app;