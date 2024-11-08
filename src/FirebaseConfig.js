// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJNTn3rKCdoN0gVFqRu1Lpi6Jp-NDVk-A",
  authDomain: "photofolio-b6a63.firebaseapp.com",
  databaseURL: "https://photofolio-b6a63-default-rtdb.firebaseio.com",
  projectId: "photofolio-b6a63",
  storageBucket: "photofolio-b6a63.firebasestorage.app",
  messagingSenderId: "822404069180",
  appId: "1:822404069180:web:c280670fcf1627b5ff5039"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
