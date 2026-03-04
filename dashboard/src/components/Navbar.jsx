export default function Navbar() {
  return (
    <nav style={{ background: '#333', color: '#fff', padding: '10px' }}>
      <h3>Smart Booking SACCO</h3>
      <button onClick={() => { localStorage.removeItem('token'); window.location.reload(); }}>Logout</button>
    </nav>
  );
}