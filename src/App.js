
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { AuthenticationProvider } from './views/AuthenticationContext';
import DashboardPage from './views/DashboardPage';
import LoginPage from './views/LoginPage';
import ProfilePage from './views/ProfilePage';
import SignupPage from './views/SignupPage';

const App = () => {
  return (
    <AuthenticationProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </Router>
    </AuthenticationProvider>
  );
};

export default App;
