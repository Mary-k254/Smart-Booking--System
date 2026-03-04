import { useEffect, useState } from 'react';
import api from '../api';
import TripCard from '../Components/TripCard';

export default function DashboardPage() {
  const [stats, setStats] = useState({ revenue: 0, trips: 0, drivers: 0 });

  useEffect(() => {
    // Fetch SACCO stats
    api.get('/drivers/earnings').then(res => setStats({ ...stats, revenue: res.data.data.total }));
  }, []);

  return (
    <div>
      <h1>SACCO Manager Dashboard</h1>
      <div style={{ display: 'flex', gap: '20px' }}>
        <div style={{ padding: '20px', background: '#eee' }}>
          <h3>Total Revenue</h3>
          <p>${stats.revenue}</p>
        </div>
        <div style={{ padding: '20px', background: '#eee' }}>
          <h3>Active Drivers</h3>
          <p>{stats.drivers}</p>
        </div>
      </div>
      <h2>Recent Trips</h2>
      <TripCard />
    </div>
  );
}