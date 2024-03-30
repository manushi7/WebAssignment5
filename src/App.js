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
import UserListingPage from './pages/UserListingPage';
import CalendarPage from './pages/CalendarPage';
import CalculatorPage from './pages/CalculatorPage';
import ThingsTodoPage from './pages/ThingsToDoPage';

const App = () => {
    return (
        <AuthenticationProvider>
          <Router>
            <Routes>
              <Route element={<Layout />}>
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
                <Route
                    path="/users"
                    element={
                        <RequireAuth>
                          <UserListingPage />
                        </RequireAuth>
                    }
                />

                <Route path="/calendar" element={
                    <RequireAuth>
                      <CalendarPage />
                    </RequireAuth>
                } />
                <Route path="/calculator" element={
                    <RequireAuth>
                      <CalculatorPage />
                    </RequireAuth>
                } />
                <Route path="/things-to-do" element={
                    <RequireAuth>
                      <ThingsTodoPage />
                    </RequireAuth>
                } />
              </Route>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
            </Routes>
          </Router>
        </AuthenticationProvider>

    );
};

export default App;
