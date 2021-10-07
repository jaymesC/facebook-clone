import firebase from "firebase";
import "firebase/storage";

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAo2JPeV6Gj8mxD5LVOhSogDEJFdOQTfy4",
  authDomain: "facebook-clone-f7d5a.firebaseapp.com",
  projectId: "facebook-clone-f7d5a",
  storageBucket: "facebook-clone-f7d5a.appspot.com",
  messagingSenderId: "727533401961",
  appId: "1:727533401961:web:8a68b75db711881e022ff8",
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
