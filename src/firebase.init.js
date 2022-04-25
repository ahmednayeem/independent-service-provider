// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOTwsBoYOhu9mPy2iW9moKg4SII0nOG4I",
  authDomain: "assignment-10-c337f.firebaseapp.com",
  projectId: "assignment-10-c337f",
  storageBucket: "assignment-10-c337f.appspot.com",
  messagingSenderId: "95258922384",
  appId: "1:95258922384:web:734bce099915867f96f715"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;