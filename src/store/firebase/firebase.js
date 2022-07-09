// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFveP49vm9VkWasYuH_EcxlRIE3CpvQDs",
  authDomain: "trackme-897ca.firebaseapp.com",
  projectId: "trackme-897ca",
  storageBucket: "trackme-897ca.appspot.com",
  messagingSenderId: "859917778380",
  appId: "1:859917778380:web:cc73d6339023e4ac0b3169",
  measurementId: "G-DW4H39FM49"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = gets(firebaseConfig);
export const db=getFirestore(app)


