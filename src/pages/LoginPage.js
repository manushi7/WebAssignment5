// LoginPage.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthentication } from '../context/auth/AuthenticationContext';
import '../pages/css/Login.css'; // Import the CSS file

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuthentication();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleLoginClick = async () => {
    if (!validateEmail(email)) {
      setError('Invalid email address');
      return;
    }

    if (!validatePassword(password)) {
      setError('Password must be at least 6 characters long');
      return;
    }

    try {
      await login( email, password);
      navigate('/');
    } catch (error) {
      setError('incorrect email or password');
      console.error('Error logging in:', error.message);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLoginClick}>Login</button>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default LoginPage;
