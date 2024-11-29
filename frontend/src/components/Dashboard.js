import React, { useEffect, useState } from 'react';
import { getUserRole } from '../services/authService';
import './Dashboard.css';

const Dashboard = () => {
  const [role, setRole] = useState('');

  useEffect(() => {
    const fetchRole = async () => {
      const userRole = await getUserRole();
      setRole(userRole);
    };
    fetchRole();
  }, []);

  return (
    <div className="dashboard">
      <h2>Welcome to the Dashboard</h2>
      <p>You are logged in as a {role}</p>
    </div>
  );
};

export default Dashboard;
