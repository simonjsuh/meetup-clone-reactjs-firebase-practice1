import React, { useState } from 'react';
import './App.css';
import '../node_modules/firebaseui/dist/firebaseui.css';
import firebase from './firebase';
import * as firebaseui from 'firebaseui'

// Initialize the FirebaseUI Widget using Firebase.
let firebaseUI = new firebaseui.auth.AuthUI(firebase.auth());

let firebaseUIConfig = {
  signInFlow: 'redirect',
  signInSuccessUrl: 'http://localhost:3000',
  signInOptions: [
    // List of OAuth providers supported.
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID
  ],
  // Other config options...
}

firebaseUI.start('#firebaseui-auth-container', firebaseUIConfig);

function App() {
  const [signedInUser, setSignedInUser] = useState('Guest');

  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      setSignedInUser(user.displayName);
      document.getElementById('firebaseui-auth-container').style.display= 'none';
      document.getElementById('signOutBtn').style.display= 'block';
    } else {
      setSignedInUser('Guest');
      document.getElementById('firebaseui-auth-container').style.display= 'block';
      document.getElementById('signOutBtn').style.display= 'none';
    }
  });

  // Firebase OAuth signout function
  function signOut(e) {
    e.preventDefault();
    firebase.auth().signOut().then(() => {
      console.log('all users signed out');
      setSignedInUser('no user signed in');
      document.getElementById('signOutBtn').style.display = 'none';document.getElementById('firebaseui-auth-container').style.display = 'block';
    }, err => {
      console.error('Sign Out Error', err);
    });
  }
  
  return (
    <div className="App">
    <div id="welcomeMsg">
      <h1>Welcome {signedInUser}</h1>
    </div>
      <div id="firebaseui-auth-container"></div>
      <div id="signOutBtn">
        <button onClick={signOut}>Sign Out</button>
      </div>
    </div>
  );
}

export default App;
