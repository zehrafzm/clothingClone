// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import {
  getAuth,
} from "firebase/auth";
import {
  getFirestore,

} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyA5dbDiw2c3CzpRcXgebpK9DGhmLRQvCvM",
    authDomain: "clothingclone-ef20d.firebaseapp.com",
    databaseURL: "https://clothingclone-ef20d-default-rtdb.firebaseio.com",
    projectId: "clothingclone-ef20d",
    storageBucket: "clothingclone-ef20d.appspot.com",
    messagingSenderId: "72677724235",
    appId: "1:72677724235:web:fea41ce0cadadadbd3fdce"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);






export const database = getDatabase(app);