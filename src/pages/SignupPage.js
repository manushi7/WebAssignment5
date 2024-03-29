// SignupPage.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthentication } from '../context/auth/AuthenticationContext';
import './css/Signup.css'; // Import the CSS file

const SignupPage = () => {
  const navigate = useNavigate();
  const { signup } = useAuthentication();
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

  const handleSignupClick = async () => {
    if (!validateEmail(email)) {
      setError('Invalid email address');
      return;
    }

    if (!validatePassword(password)) {
      setError('Password must be at least 6 characters long');
      return;
    }

    try {
      await signup(email, password);
      // Navigate to another page after signup
      navigate('/');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
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
      <button onClick={handleSignupClick}>Sign Up</button>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default SignupPage;
