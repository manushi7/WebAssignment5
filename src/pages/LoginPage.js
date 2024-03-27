import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthentication } from '../pages/AuthenticationContext';

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuthentication();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginClick = async () => {
    console.log("Login button clicked");
    try {
      await login(email, password);
      navigate('/profile')
    } catch (error) {
      console.error('Error logging in:', error.message);
    }
  };

  return (
    <div>
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
    </div>
  );
};

export default LoginPage;
