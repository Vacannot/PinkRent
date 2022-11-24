// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuYIaKbJ0QAceMYFqdRKcDn_jDig7PKKI",
  authDomain: "pinkrent-a3337.firebaseapp.com",
  projectId: "pinkrent-a3337",
  storageBucket: "pinkrent-a3337.appspot.com",
  messagingSenderId: "237688511860",
  appId: "1:237688511860:web:69c3bb31f1a2f98bf36021",
  measurementId: "G-VZ7HHRH0VM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);