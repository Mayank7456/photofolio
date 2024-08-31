// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6rf4impm450ta_NS7sTyKZAkmOqPoLbI",
  authDomain: "photofolio-web.firebaseapp.com",
  projectId: "photofolio-web",
  storageBucket: "photofolio-web.appspot.com",
  messagingSenderId: "857808654153",
  appId: "1:857808654153:web:5d906cbfe7900a32db5498"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
