import {initializeApp} from "firebase/app";
import {collection, getDocs, getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

// Initialize FireBase app
export const app = initializeApp(firebaseConfig);

// Initialize services
export const db = getFirestore();
export const auth = getAuth(app);

// collection ref
const colProducts = collection(db, "products");
const colNotifs = collection(db, "notifications");

//get products data
getDocs(colProducts)
  .then((snapshot) => {
    let products: any = [];
    snapshot.docs.forEach((doc) => {
      products.push({...doc.data(), id: doc.id});
    });
    console.log(products);
  })
  .catch((err) => {
    console.log(err.message);
  });

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
