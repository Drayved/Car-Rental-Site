// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtWu7Rd4-AdgCEz7i-hGmjE_8N_IbUiKs",
  authDomain: "car-rental-4385b.firebaseapp.com",
  databaseURL: "https://car-rental-4385b-default-rtdb.firebaseio.com",
  projectId: "car-rental-4385b",
  storageBucket: "car-rental-4385b.appspot.com",
  messagingSenderId: "536234376128",
  appId: "1:536234376128:web:d497b448cdad3d2d38e625",
  measurementId: "G-C0JRCL29JE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app }