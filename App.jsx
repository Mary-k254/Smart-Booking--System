import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import DashboardPage from './Pages/DashboardPage';
import TripsPage from './Pages/TripsPage';
import DriversPage from './Pages/DriversPage';
import BookingsPage from './Pages/BookingsPage';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';

function App() {
  const isAuthenticated = localStorage.getItem('token');

  return (
    <BrowserRouter>
      {isAuthenticated && <Navbar />}
      <div style={{ display: 'flex' }}>
        {isAuthenticated && <Sidebar />}
        <div style={{ flex: 1, padding: '20px' }}>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/trips" element={<TripsPage />} />
            <Route path="/drivers" element={<DriversPage />} />
            <Route path="/bookings" element={<BookingsPage />} />
            <Route path="/" element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;