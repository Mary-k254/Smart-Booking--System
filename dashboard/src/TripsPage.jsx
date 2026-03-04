import { useEffect, useState } from 'react';
import api from '../api';

export default function TripsPage() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    api.get('/trips/history').then(res => setTrips(res.data.data));
  }, []);

  return (
    <div>
      <h1>Trip History</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr><th>ID</th><th>Distance</th><th>Fare</th><th>Status</th></tr>
        </thead>
        <tbody>
          {trips.map(t => (
            <tr key={t.id}><td>{t.id}</td><td>{t.distance_km} km</td><td>${t.fare_amount}</td><td>{t.status}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}