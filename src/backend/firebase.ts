import {initializeApp} from "firebase/app";
import {collection, getDocs, getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBuYIaKbJ0QAceMYFqdRKcDn_jDig7PKKI",

  authDomain: "pinkrent-a3337.firebaseapp.com",

  projectId: "pinkrent-a3337",

  storageBucket: "pinkrent-a3337.appspot.com",

  messagingSenderId: "237688511860",

  appId: "1:237688511860:web:69c3bb31f1a2f98bf36021",

  measurementId: "G-VZ7HHRH0VM",
};

// Initialize FireBase app
export const app = initializeApp(firebaseConfig);

// Initialize services
export const db = getFirestore();
export const auth = getAuth(app);

// collection ref
const colNotifs = collection(db, "notifications");

//get notifs data
getDocs(colNotifs)
  .then((snapshot) => {
    let notifs: any = [];
    snapshot.docs.forEach((doc) => {
      notifs.push({...doc.data(), id: doc.id});
    });
    console.log(notifs);
  })
  .catch((err) => {
    console.log(err.message);
  });
