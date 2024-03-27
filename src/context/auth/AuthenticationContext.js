import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../firebaseConfig.js';

// AuthContext.js
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);

  const login = () => setAuthenticated(true);
  const logout = () => setAuthenticated(false);

  return (
    <AuthContext.Provider value={{ authenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Create the authentication context
const AuthenticationContext = createContext();


export const useAuthentication = () => useContext(AuthenticationContext);

// Authentication provider component
export const AuthenticationProvider = ({ children }) => {
  
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  // Method to log in user
  const login = async (email, password) => {
    try {
      await auth.signInWithEmailAndPassword(auth, email, password);
        setAuthenticated(true)
    } catch (error) {
      console.error('Error signing in:', error.message);
    }
  };
  // Method to signup in user
  const signup = async (email, password) => {
    try {
      await auth.createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error('Error signing in:', error.message);
    }
  };



  
//   // Method to sign out user
//   const logout = async () => {
//     try {
//       await auth.signOut();

        // setAuthenticated(false)
//     } catch (error) {
//       console.error('Error signing out:', error.message);
//     }
//   };

  // Value object for the context provider
  const value = {
    user,
    authenticated,
    loading,
    login,
    signup,
    // logout,
  };

  // Return the context provider with the value
  return (
    <AuthenticationContext.Provider value={value}>
      {children}
    </AuthenticationContext.Provider>
  );
};
