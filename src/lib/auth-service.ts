import { 
  GoogleAuthProvider, 
  signInWithPopup, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  onAuthStateChanged,
  User as FirebaseUser
} from "firebase/auth";
import { auth } from "./firebase";
import { apiClient } from "./axios";

export const googleProvider = new GoogleAuthProvider();

export const verifyTokenWithBackend = async (token: string) => {
  try {
    const response = await apiClient.post("/auth/verify", {}, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error("Backend verification failed:", error);
    throw error;
  }
};
