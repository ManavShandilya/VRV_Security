import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      {/* <div className="logo">
        <img src="/assets/logo.png" alt="Logo" />
        <h1>RBAC React</h1>
      </div> */}
      <h1>VRV_Security</h1>
      <nav>
        <Link to="/">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>
    </header>
  );
};

export default Header;
