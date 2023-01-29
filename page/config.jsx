// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNrtbwV8HHxP0Gw1CWX3zZYW5h3sGEsIM",

  authDomain: "rntubes-42a70.firebaseapp.com",

  projectId: "rntubes-42a70",

  storageBucket: "rntubes-42a70.appspot.com",

  messagingSenderId: "697705339457",

  appId: "1:697705339457:web:7da3c891cd070a168e04c0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
