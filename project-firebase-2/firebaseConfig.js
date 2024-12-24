// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6kOZ5y3RvSsJ9IRgBXkYHMMEkHjT9skc",
  authDomain: "project2-8c908.firebaseapp.com",
  projectId: "project2-8c908",
  storageBucket: "project2-8c908.firebasestorage.app",
  messagingSenderId: "435276326293",
  appId: "1:435276326293:web:36ea59b4dc99bfdd74029c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db=getFirestore(app);
const provider = new GoogleAuthProvider();

export {auth,db,provider};