import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBRFxXpz-XdXlHmT4aeT8Py4QGtwm7xZoE",
  authDomain: "sign-up-ae764.firebaseapp.com",
  projectId: "sign-up-ae764",
  storageBucket: "sign-up-ae764.appspot.com",
  messagingSenderId: "372507104984",
  appId: "1:372507104984:web:19962b191e0d25891069ad",
  measurementId: "G-S8HX9Y0MK9"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export {app, auth};