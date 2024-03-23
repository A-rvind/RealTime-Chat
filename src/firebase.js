import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: {/*GET YOUR API*/}
  authDomain: "portfolio-responses-6afe7.firebaseapp.com",
  databaseURL: "https://portfolio-responses-6afe7-default-rtdb.firebaseio.com",
  projectId: "portfolio-responses-6afe7",
  storageBucket: "portfolio-responses-6afe7.appspot.com",
  messagingSenderId: "868508655928",
  appId: "1:868508655928:web:a8edec8b9c4fff7e3b21cd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
