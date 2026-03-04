import { useEffect, useState } from 'react';
import api from '../api';

export default function DriversPage() {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    api.get('/drivers').then(res => setDrivers(res.data.data));
  }, []);

  return (
    <div>
      <h1>Driver Management</h1>
      <ul>
        {drivers.map(d => (
          <li key={d.user_id}>
            {d.user_id} - Rating: {d.rating} - Online: {d.is_online ? 'Yes' : 'No'}
          </li>
        ))}
      </ul>
    </div>
  );
}