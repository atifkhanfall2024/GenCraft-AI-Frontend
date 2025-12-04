// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider , getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "gencarft-ai.firebaseapp.com",
  projectId: "gencarft-ai",
  storageBucket: "gencarft-ai.firebasestorage.app",
  messagingSenderId: "25150402284",
  appId: "1:25150402284:web:06cd91ee3a061a0dbdbfc9",
  measurementId: "G-W41EF3EPQR"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

// add auth provider

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth , provider}