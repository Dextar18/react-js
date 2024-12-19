// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from  "firebase/auth"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDg6vIYpP2858DzwjKOfm2SkWzrUwkJ7Js",
  authDomain: "fir-project-c6bf5.firebaseapp.com",
  projectId: "fir-project-c6bf5",
  storageBucket: "fir-project-c6bf5.firebasestorage.app",
  messagingSenderId: "606647852188",
  appId: "1:606647852188:web:cc7e622313cad04baaa159"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db=getFirestore(app);

export {auth,db};