import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5dAlK7zvXtLoXpJsIvR5pmJq2q5I2cfo",
  authDomain: "chatapp-9e1e9.firebaseapp.com",
  projectId: "chatapp-9e1e9",
  storageBucket: "chatapp-9e1e9.appspot.com",
  messagingSenderId: "537087971308",
  appId: "1:537087971308:web:bb9e37be842a457ca7fac9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
