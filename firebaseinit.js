// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCnZCC5KLx1NOnWNHW-Dn-j5jaI8RVjv0",
  authDomain: "blogging-app-e8a12.firebaseapp.com",
  projectId: "blogging-app-e8a12",
  storageBucket: "blogging-app-e8a12.appspot.com",
  messagingSenderId: "999610347497",
  appId: "1:999610347497:web:a5cab02aed7b4a6db52578"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
