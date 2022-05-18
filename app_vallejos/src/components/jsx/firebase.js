// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJyUPQ9NCvKtCBL4LrLXzlEM3J_DRooBc",
  authDomain: "app-vallejos-ecommerce.firebaseapp.com",
  projectId: "app-vallejos-ecommerce",
  storageBucket: "app-vallejos-ecommerce.appspot.com",
  messagingSenderId: "253292400037",
  appId: "1:253292400037:web:c9d48dd26800bbe57b2c4c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);