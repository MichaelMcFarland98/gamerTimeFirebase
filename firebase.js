// Import the functions y ou need from the SDKs you need
//import { initializeApp } from "@firebase/app"; 
//import * as firebase from "firebase";
import firebase from "firebase";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcMVZiE2DE64q5pLk6tCOmccvAP9d3GjU",
  authDomain: "gamertimetesting.firebaseapp.com",
  projectId: "gamertimetesting",
  storageBucket: "gamertimetesting.appspot.com",
  messagingSenderId: "568699334655",
  appId: "1:568699334655:web:6953c6f8cd001925e0c1ca",
  measurementId: "G-D88GLDKYRW"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()

export { auth }; 