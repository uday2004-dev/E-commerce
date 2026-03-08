
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "loginshoppingcart-ea5d9.firebaseapp.com",
  projectId: "loginshoppingcart-ea5d9",
  storageBucket: "loginshoppingcart-ea5d9.firebasestorage.app",
  messagingSenderId: "518858725251",
  appId: "1:518858725251:web:1a385419fccc1150d588b6"
};

const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const provider=new GoogleAuthProvider 
export {auth,provider}