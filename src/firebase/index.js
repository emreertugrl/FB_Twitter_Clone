// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOKZbiHAzKbvHZkAq2UDPWxJSyP_NdSHc",
  authDomain: "fbtwitterclone-e81cb.firebaseapp.com",
  projectId: "fbtwitterclone-e81cb",
  storageBucket: "fbtwitterclone-e81cb.appspot.com",
  messagingSenderId: "117716490561",
  appId: "1:117716490561:web:b594672e27053a1d9c69c0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth referance al
export const auth = getAuth(app);

// google referance
export const provider = new GoogleAuthProvider();

// mail referance
