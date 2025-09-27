// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAU4Ms0c-3lKVQH5ptL8x3xngBWn7fE7iw",
  authDomain: "goride-79f66.firebaseapp.com",
  projectId: "goride-79f66",
  storageBucket: "goride-79f66.firebasestorage.app",
  messagingSenderId: "236732118333",
  appId: "1:236732118333:web:bf5bfb9fc4d513d80d8154",
  measurementId: "G-Z6XGBDG7SH"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db= getFirestore(app);
export { auth, provider,db };
