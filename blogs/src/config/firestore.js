import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import { getAnalytics } from "firebase/analytics";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDltk0Hu2tZj0PJzZgW_NfGbefESo8t0mk",
  authDomain: "blogs-with-react.firebaseapp.com",
  projectId: "blogs-with-react",
  storageBucket: "blogs-with-react.appspot.com",
  messagingSenderId: "199682342199",
  appId: "1:199682342199:web:b330bccc6c135116342eb2",
  measurementId: "G-FYP1EVZQN3"
};

  // Initialize Firebase
// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };