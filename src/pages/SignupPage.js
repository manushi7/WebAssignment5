import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthentication } from '../context/auth/AuthenticationContext';

const SignupPage = () => {
  const navigate = useNavigate();
  const { signup } = useAuthentication();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignupClick = async () => {
    try {
      await signup(email, password);
      // Navigate to another page after signup
      navigate('/dashboard');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
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
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default SignupPage;
