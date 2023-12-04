// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCm37yPXB5ObFktDf2sockCzhxCcVCJ9mo",
  authDomain: "subhankarportfolio-5e68f.firebaseapp.com",
  projectId: "subhankarportfolio-5e68f",
  storageBucket: "subhankarportfolio-5e68f.appspot.com",
  messagingSenderId: "84279495144",
  appId: "1:84279495144:web:ec0cfa91d98a77259bbc5d",
  measurementId: "G-1B587GEKR5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();