import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBAwqENhBH38iIWk-6hR8mZNwy2w_yRNb0",
  authDomain: "share-pl.firebaseapp.com",
  projectId: "share-pl",
  storageBucket: "share-pl.appspot.com",
  messagingSenderId: "437874145702",
  appId: "1:437874145702:web:8e10881d4ff52c97e3b767",
  measurementId: "G-RP04SJGJ17"
};

const app = initializeApp(firebaseConfig);
const authentication = getAuth(app);

export default authentication;
