import React, { useState } from 'react';
import './Register.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('User'); // Default role set to 'User'

  const handleRegister = (e) => {
    e.preventDefault();
    // Send registration data to the backend, including role
    const registerData = { email, password, role };

    // Example of API request (you should replace the URL with your backend register endpoint)
    fetch('http://localhost:5000/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(registerData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Registration successful:', data);
        // Redirect or show success message
      })
      .catch((error) => {
        console.error('Error during registration:', error);
      });
  };

  return (
    <div className="register-form">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Role</label>
          <select value={role} onChange={(e) => setRole(e.target.value)} required>
            <option value="User">User</option>
            <option value="Admin">Admin</option>
            <option value="Moderator">Moderator</option>
          </select>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
