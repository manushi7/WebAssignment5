import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthentication } from '../context/auth/AuthenticationContext';
import './css/Signup.css'; // Import the CSS file

const SignupPage = () => {
  const navigate = useNavigate();
  const { signup } = useAuthentication();
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('')
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const validateFullName = (fullName) => {
    return fullName.trim().length > 0;
  };

  const handleSignupClick = async () => {
    if (!validateEmail(email)) {
      setError('Invalid email address');
      return;
    }

    if (!validateFullName(fullName)) {
      setError('Please enter your full name');
      return;
    }

    if (!validatePassword(password)) {
      setError('Password must be at least 6 characters long');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      await signup(email, password, fullName, phoneNumber);
      // Navigate to another page after signup
      navigate('/login');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <input
        type="name"
        placeholder="Full Name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
     <input
        type="tel"
        placeholder="Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button onClick={handleSignupClick}>Sign Up</button>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default SignupPage;
