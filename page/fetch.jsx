// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

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
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
