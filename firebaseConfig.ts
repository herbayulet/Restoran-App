// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, doc, getDocs, addDoc,deleteDoc, collection} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwUeBjVlFueKsbxim8lX5OhL7SUBHzBBs",
  authDomain: "shoppingapp-9fd61.firebaseapp.com",
  projectId: "shoppingapp-9fd61",
  storageBucket: "shoppingapp-9fd61.appspot.com",
  messagingSenderId: "732036780134",
  appId: "1:732036780134:web:ff1e4e431018b71721dda7",
  measurementId: "G-96WS37C9FS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db, doc, getDocs, addDoc,deleteDoc, collection }