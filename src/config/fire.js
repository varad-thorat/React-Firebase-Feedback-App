// import firebase from 'firebase';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import 'firebase/database'
import {getDatabase} from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWYIElneckBQZHuI00YN6tJxXLbVB_tcI",
  authDomain: "fb-app-2c3f3.firebaseapp.com",
  databaseURL: 'https://fb-app-2c3f3-default-rtdb.firebaseio.com',
  projectId: "fb-app-2c3f3",
  storageBucket: "fb-app-2c3f3.appspot.com",
  messagingSenderId: "409155387165",
  appId: "1:409155387165:web:ba9290600fcd7e80646bf4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const dataabse = getDatabase(app);