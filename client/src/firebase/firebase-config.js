import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB5cnn3TF_jW6Tpw-valZ7OJ_HH1DKeusk",
    authDomain: "revision-ea1da.firebaseapp.com",
    projectId: "revision-ea1da",
    storageBucket: "revision-ea1da.appspot.com",
    messagingSenderId: "227138034698",
    appId: "1:227138034698:web:011b79ca9a965a174893f3"
  };
  

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();