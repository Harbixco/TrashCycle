// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAUrti06rXZhdStW4duJDpimYJSGOLzNfk",
  authDomain: "trashcycleregister.firebaseapp.com",
  projectId: "trashcycleregister",
  storageBucket: "trashcycleregister.firebasestorage.app",
  messagingSenderId: "784614581020",
  appId: "1:784614581020:web:88be489ab36aa9d70910d9",
  measurementId: "G-SDLM68RGMT",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
