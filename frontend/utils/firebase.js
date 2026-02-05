import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { initializeApp } from "firebase/app";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_APIKEY ,
  authDomain: "logincard.firebaseapp.com",
  projectId: "logincard",
  storageBucket: "logincard.firebasestorage.app",
  messagingSenderId: "1064796708491",
  appId: "1:1064796708491:web:ce79f739984651ba29fe8e"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)


const provider=new GoogleAuthProvider()


export  {auth,provider}