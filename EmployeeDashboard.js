import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/EmployeeDashboard.css';

const EmployeeDashboard = () => {
  const navigate = useNavigate();
  const role = localStorage.getItem('role');

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <div style={{ padding: '30px' }}>
      <h2>Welcome, {role?.toUpperCase()}!</h2>
      <p>This is the Employee Dashboard</p>
      <button onClick={handleLogout} style={{ padding: '10px', marginTop: '20px' }}>
        Logout
      </button>
    </div>
  );
};

export default EmployeeDashboard;