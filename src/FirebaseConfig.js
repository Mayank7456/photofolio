// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDjpl4Se-JBfoImRKqikXOxrvgtym8zSrE",
  authDomain: "photofolio-a1b98.firebaseapp.com",
  projectId: "photofolio-a1b98",
  storageBucket: "photofolio-a1b98.firebasestorage.app",
  messagingSenderId: "1065853561319",
  appId: "1:1065853561319:web:580e1e9e4bf6a0d734f542"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
