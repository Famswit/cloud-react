// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgwh2QaPAlj1v8sxBhPAj7D6Hevh4isxg",
  authDomain: "fir-auth-5110b.firebaseapp.com",
  projectId: "fir-auth-5110b",
  storageBucket: "fir-auth-5110b.appspot.com",
  messagingSenderId: "84877978250",
  appId: "1:84877978250:web:10f40fa626ded04e44db73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app }