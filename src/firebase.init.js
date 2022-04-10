// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmxQ05h21uLIRXqZJ24DsDjachSWzSS_k",
  authDomain: "ema-john-ecommerce-66de8.firebaseapp.com",
  projectId: "ema-john-ecommerce-66de8",
  storageBucket: "ema-john-ecommerce-66de8.appspot.com",
  messagingSenderId: "409689764265",
  appId: "1:409689764265:web:e183c0ada10ae1e06a54b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
