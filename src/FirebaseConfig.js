// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCqsQkX5OCS2-c0aCzxP0ggPexkVlSm1Vs",
  authDomain: "photofolio-fdd94.firebaseapp.com",
  projectId: "photofolio-fdd94",
  storageBucket: "photofolio-fdd94.firebasestorage.app",
  messagingSenderId: "693520980629",
  appId: "1:693520980629:web:913350eaf46db54036199c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
