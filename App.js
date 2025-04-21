import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import AdminDashboard from './pages/dashboard/AdminDashboard';
import ManagerDashboard from './pages/dashboard/ManagerDashboard';
import EmployeeDashboard from './pages/dashboard/EmployeeDashboard';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
    <Routes>
  {/* Public */}
  <Route path="/" element={<Login />} />
  <Route path="/register" element={<Register />} />
  <Route path="/forgot-password" element={<ForgotPassword />} />

  {/* Protected */}
  <Route
    path="/dashboard/admin"
    element={
      <ProtectedRoute>
        <AdminDashboard />
      </ProtectedRoute>
    }
  />
  <Route
    path="/dashboard/manager"
    element={
      <ProtectedRoute>
        <ManagerDashboard />
      </ProtectedRoute>
    }
  />
  <Route
    path="/dashboard/employee"
    element={
      <ProtectedRoute>
        <EmployeeDashboard />
      </ProtectedRoute>
    }
  />
</Routes>

    </Router>
  );
}

export default App;