// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "deltaai-edcfe.firebaseapp.com",
  projectId: "deltaai-edcfe",
  storageBucket: "deltaai-edcfe.firebasestorage.app",
  messagingSenderId: "469151051611",
  appId: "1:469151051611:web:2a6cc13bec00c931b0f47e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();