import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqC1sM6IadnbiLcaZH1dPzDHbqOAzBvYU",
  authDomain: "login-288.firebaseapp.com",
  projectId: "login-288",
  storageBucket: "login-288.appspot.com",
  messagingSenderId: "732491191816",
  appId: "1:732491191816:web:c1252a397ed3f2e59263bd",
  measurementId: "G-YZT035KGYK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth();

export {app,auth};