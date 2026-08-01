
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "intervx-bb34f.firebaseapp.com",
  projectId: "intervx-bb34f",
  storageBucket: "intervx-bb34f.firebasestorage.app",
  messagingSenderId: "23682442437",
  appId: "1:23682442437:web:5d22e7405a8272526d7cac"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}