// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDB17T-begUSf_0HUPaYa0ZCYMwJuGtBsg",
  authDomain: "photofolio-e720d.firebaseapp.com",
  projectId: "photofolio-e720d",
  storageBucket: "photofolio-e720d.firebasestorage.app",
  messagingSenderId: "785124796822",
  appId: "1:785124796822:web:1044b28fdaefcaeb7515b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
