import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDH9mnVR6I0F8Wow8eZD7FgeteEabQNogg",
    authDomain: "uniteup-fadc9.firebaseapp.com",
    projectId: "uniteup-fadc9",
    storageBucket: "uniteup-fadc9.appspot.com",
    messagingSenderId: "557737049783",
    appId: "1:557737049783:web:e6c17d92c3817257789732",
    measurementId: "G-GMJ8XMVS6H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app };