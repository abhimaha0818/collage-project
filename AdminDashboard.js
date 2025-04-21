import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/AdminDashboard.css';
import axios from 'axios';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const role = localStorage.getItem('role');
  const [users, setUsers] = useState([]);

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  useEffect(() => {
    axios.get('http://localhost:5000/api/auth/users')
      .then(res => setUsers(res.data))
      .catch(err => console.error('Error fetching users:', err));
  }, []);
  const handleDelete = async (id) => {
    console.log("Deleting user with ID:", id);
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await axios.delete(`http://localhost:5000/api/auth/users/${id}`);
        setUsers(prev => prev.filter(user => user._id !== id));
      } catch (err) {
        console.error('Delete failed:', err);
        alert('Failed to delete user');
      }
    }
  };

  return (
    <div className="admin-container">
      <h2>Welcome, {role?.toUpperCase()}!</h2>
      <p>This is the Admin Dashboard</p>

      <h3>Registered Users:</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u, idx) => (
            <tr key={idx}>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.role}</td>
              <td>  <button onClick={() => handleDelete(u._id)}
      className="delete-btn">Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={handleLogout}>Logout</button>
    
    </div>
  );
};

export default AdminDashboard;