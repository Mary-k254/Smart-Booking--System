import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';

export default function LoginPage() {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/auth/login', { phone, password });
      localStorage.setItem('token', res.data.token);
      navigate('/dashboard');
    } catch (err) {
      alert('Login failed');
    }
  };

  return (
    <div style={{ maxWidth: '300px', margin: '100px auto' }}>
      <h2>SACCO Admin Login</h2>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="Phone" value={phone} onChange={e => setPhone(e.target.value)} style={{ width: '100%', marginBottom: '10px' }} />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} style={{ width: '100%', marginBottom: '10px' }} />
        <button type="submit" style={{ width: '100%' }}>Login</button>
      </form>
    </div>
  );
}