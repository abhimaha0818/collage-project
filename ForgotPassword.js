import React, { useState } from 'react';
import '../styles/login.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reset link will be sent to:", email);
    setMessage("Reset link sent to your email!");
    // In actual app: send POST request to backend
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          <label>Enter your registered email</label>
          <input
            type="email"
            required
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Send Reset Link</button>
          {message && <p style={{ color: "green", marginTop: "10px" }}>{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;