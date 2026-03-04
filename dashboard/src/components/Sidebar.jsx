import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div style={{ width: '200px', background: '#f4f4f4', height: '100vh', padding: '20px' }}>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/trips">Trips</Link></li>
        <li><Link to="/drivers">Drivers</Link></li>
        <li><Link to="/bookings">Bookings</Link></li>
      </ul>
    </div>
  );
}