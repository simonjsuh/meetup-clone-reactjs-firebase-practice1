// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyAHKS5dOKkadWkQcWCnjrXH6G2CO_SBTd4",
  authDomain: "db-for-meetup-clone-project.firebaseapp.com",
  databaseURL: "https://db-for-meetup-clone-project.firebaseio.com",
  projectId: "db-for-meetup-clone-project",
  storageBucket: "db-for-meetup-clone-project.appspot.com",
  messagingSenderId: "545021533717",
  appId: "1:545021533717:web:85906578f5a4fcffcfb81c",
  measurementId: "G-G22780K8Z6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;

