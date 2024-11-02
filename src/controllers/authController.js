import { auth } from "../config/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

// Register User
export const registerUser = async (email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error("Registration error: ", error);
  }
};

// Login User
export const loginUser = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error("Login error: ", error);
  }
};

// Logout User
export const logoutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Logout error: ", error);
  }
};
