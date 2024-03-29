import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from '../firestoreConfig.js';

// Function to handle user sign-up
export const signUpUser = async (email, password, fullName, phoneNumber) => {
    try {
        // Create user account using Firebase Authentication
        const auth = getAuth();
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);

        const userData = {
            id: auth.currentUser.uid,
            displayName: fullName,
            phoneNumber: phoneNumber,
            email: email,
            // Add more fields as needed
        };

        await setDoc(doc(db, "users", auth.currentUser.uid), userData);

        return true;

    } catch (error) {
        // Error handling for sign-up process
        console.error("Error signing up user:", error);
        return false;
    }
};
