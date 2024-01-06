// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtwnyEJMFHD0C-DqJfJo6beyGXZK1HctA",
  authDomain: "dwfs23-m2s16.firebaseapp.com",
  projectId: "dwfs23-m2s16",
  storageBucket: "dwfs23-m2s16.appspot.com",
  messagingSenderId: "191000430452",
  appId: "1:191000430452:web:b8a46988aa730479488e21",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
