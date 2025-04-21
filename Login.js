import React, { useState } from 'react';
import '../styles/login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Make sure axios is installed

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });
      const { token, role } = response.data;
      console.log("Backend response:", response.data);
      // Store in localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('role', role);
  
      // Navigate to the correct dashboard
      navigate(`/dashboard/${role}`);
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
      alert(`Login failed: ${error.response?.data?.error || error.message}`);
    }
  };
  return (
    <div className="login-container">
      <div className="login-card">
        <form onSubmit={handleLogin}>
          <label>Email</label>
          <input
            type="email"
            required
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            required
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Login</button>

          <div className="login-links">
            <a href="/forgot-password">Forgot Password?</a>
            <span> | </span>
            <a href="/register">New User? Register</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;