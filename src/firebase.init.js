import { getAuth } from "firebase/auth";// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDA3fyaWEJ57rm1GWDz7hPwT-PsTiy05Pw",
  authDomain: "module-51-17930.firebaseapp.com",
  projectId: "module-51-17930",
  storageBucket: "module-51-17930.firebasestorage.app",
  messagingSenderId: "818244643195",
  appId: "1:818244643195:web:cb0052b5a07bc4418bb5de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);