
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { AuthenticationProvider } from './context/auth/AuthenticationContext';
import { initializeApp } from 'firebase/app';

import Layout from './components/Layout';
import RequireAuth from './components/RequireAuth';

import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import SignupPage from './pages/SignupPage';

const App = () => {
    return (
        <AuthenticationProvider>
          <Router>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route
                  path="/"
                  element={
                      <RequireAuth>
                        <DashboardPage />
                      </RequireAuth>
                  }
              />
              <Route
                  path="/profile"
                  element={
                      <RequireAuth>
                        <ProfilePage />
                      </RequireAuth>
                  }
              />
          </Route>
          </Routes>
        </Router>
        </AuthenticationProvider>

    );
};

export default App;
