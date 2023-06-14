import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCjVua27eD-FsxdWDem1Uf3nXiP3zcT_zg",
    authDomain: "uniteup-b6ced.firebaseapp.com",
    projectId: "uniteup-b6ced",
    storageBucket: "uniteup-b6ced.appspot.com",
    messagingSenderId: "1005211057652",
    appId: "1:1005211057652:web:46739a7ff00a50032fcda1",
    measurementId: "G-P94VLSF2RW"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app };

export const db = getFirestore(app);