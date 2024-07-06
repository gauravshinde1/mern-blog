// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-7f161.firebaseapp.com",
  projectId: "mern-blog-7f161",
  storageBucket: "mern-blog-7f161.appspot.com",
  messagingSenderId: "295984830964",
  appId: "1:295984830964:web:1de1db1d6756c0652a41a1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
