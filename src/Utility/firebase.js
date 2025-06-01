import firebase from "firebase/compat/app";
// auth
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBWmYKMepykNHvrMRe9_on9O620Djpve6k",
  authDomain: "clone-abafb.firebaseapp.com",
  projectId: "clone-abafb",
  storageBucket: "clone-abafb.firebasestorage.app",
  messagingSenderId: "371760716100",
  appId: "1:371760716100:web:d905e3e63010ad9fc61f11",
  measurementId: "G-0M0SNXR3W8",
};
// Initialize firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
