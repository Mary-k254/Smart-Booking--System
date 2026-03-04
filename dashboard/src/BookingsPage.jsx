import { useEffect, useState } from 'react';
import api from '../api';

export default function BookingsPage() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    api.get('/bookings/list').then(res => setBookings(res.data.data));
  }, []);

  return (
    <div>
      <h1>All Bookings</h1>
      {bookings.map(b => (
        <div key={b.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
          <p>Booking #{b.id} - {b.status}</p>
          <p>Fare: ${b.fare_amount}</p>
        </div>
      ))}
    </div>
  );
}