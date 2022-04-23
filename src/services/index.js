// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgD1Rp21QLz9dkk_mDtRwxEV2_UW-whC0",
  authDomain: "coderhouse-2f18f.firebaseapp.com",
  projectId: "coderhouse-2f18f",
  storageBucket: "coderhouse-2f18f.appspot.com",
  messagingSenderId: "630758434183",
  appId: "1:630758434183:web:5b0fa6c5ce6132f8759f22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestoreDb = getFirestore(app);