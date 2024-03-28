import { createContext, useContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../firebaseConfig.js';

// Create the authentication context
const AuthenticationContext = createContext();


export const useAuthentication = () => useContext(AuthenticationContext);

// Authentication provider component
export const AuthenticationProvider = ({ children }) => {
    const auth = getAuth();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unregisterAuthObserver = auth.onAuthStateChanged((user) => {
            setUser(user);
            setLoading(false);
        });

        return unregisterAuthObserver;
    }, []);

    // Method to log in user
    const login = async (email, password) => {
        const auth = getAuth();

        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.error('Error signing in:', error.message);
        }
    };
    // Method to signup in user
    const signup = async (email, password) => {
        const auth = getAuth();

        try {
            await createUserWithEmailAndPassword(auth, email, password)
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
