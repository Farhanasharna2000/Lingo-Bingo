// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaXHnjSBtPqHYgRImIy9cttHQX0SnUpHM",
  authDomain: "lingo-bingo-23771.firebaseapp.com",
  projectId: "lingo-bingo-23771",
  storageBucket: "lingo-bingo-23771.firebasestorage.app",
  messagingSenderId: "648002039157",
  appId: "1:648002039157:web:25916a50939a932dbc373c"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);