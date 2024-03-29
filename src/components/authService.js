// authService.js

import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { collection, doc, set } from "firebase/firestore";
import { db } from '../firestoreConfig';

// Function to handle user sign-up
export const signUpUser = async (email, password, fullName, phoneNumber) => {
  try {
    // Create user account using Firebase Authentication
    const auth = getAuth();
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    // Retrieve user's unique ID (UID)
    const userId = userCredential.user.uid;

    // Store additional user information in Firestore
    const userData = {
      fullName: fullName,
      phoneNumber: phoneNumber,
      // Add more fields as needed
    };

    // Reference to the "users" collection in Firestore
    const usersCollection = collection(db, "users");

    // Create a document reference for the user
    const userDocRef = doc(usersCollection, userId);

    // Write user data to Firestore
    await set(userDocRef, userData);

    // User sign-up successful
    return true;
  } catch (error) {
    // Error handling for sign-up process
    console.error("Error signing up user:", error);
    return false;
  }
};
