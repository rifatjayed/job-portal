// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCV-K1MScJut1Te-HqLyNUupfn7WsJ6ef0",
  authDomain: "jobportal-51d68.firebaseapp.com",
  projectId: "jobportal-51d68",
  storageBucket: "jobportal-51d68.firebasestorage.app",
  messagingSenderId: "393281916109",
  appId: "1:393281916109:web:4c156caad51f09407dad84",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
