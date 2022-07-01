// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGXEktfzcrRrehAhQOxxlSXtm8I8LRb90",
  authDomain: "twitter-clone-75bcd.firebaseapp.com",
  projectId: "twitter-clone-75bcd",
  storageBucket: "twitter-clone-75bcd.appspot.com",
  messagingSenderId: "846336438176",
  appId: "1:846336438176:web:94c8e8821b8ef56d70bec5",
  measurementId: "G-W79F3GQQBZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db=getFirestore(app);
export default db;