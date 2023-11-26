// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE,
  authDomain: "mern-estate-iharishsh.firebaseapp.com",
  projectId: "mern-estate-iharishsh",
  storageBucket: "mern-estate-iharishsh.appspot.com",
  messagingSenderId: "453262571498",
  appId: "1:453262571498:web:478b3bca58cba854ee2493",
  measurementId: "G-BL9GVP7J25"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);