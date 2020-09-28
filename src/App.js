import React, { useState, useEffect } from 'react';
import './App.css';
import '../node_modules/firebaseui/dist/firebaseui.css';
import { firebaseDB, firebaseUI } from './firebase';

function App() {
  // let user = firebaseDB.auth().currentUser;

  // if (user) {
  //   alert('user ' + user + ' is signed in');
  // } else {
    
  // }

  const [signedInUser, setSignedInUser] = useState('');

  firebaseUI.start('#firebaseui-auth-container', {
    signInSuccessUrl: 'http://localhost:3000',
    signInOptions: [
      // List of OAuth providers supported.
      firebaseDB.firebase_.auth.EmailAuthProvider.PROVIDER_ID,
      firebaseDB.firebase_.auth.GoogleAuthProvider.PROVIDER_ID,
      firebaseDB.firebase_.auth.FacebookAuthProvider.PROVIDER_ID
    ],
    // Other config options...
  });

  firebaseDB.auth().onAuthStateChanged(function(user) {
    if (user) {
      alert('user ' + user.displayName + ' is signed in');
      document.getElementById('firebaseui-auth-container').style.display = 'none';
      setSignedInUser(user.displayName);
    } else {
      
    }
  });

  // Firebase OAuth signout function
  function signOut(e) {
    e.preventDefault();
    firebaseDB.auth().signOut().then(() => {
      alert('no users signed in');
    }, err => {
      console.error('Sign Out Error', err);
    });
  }

  // // firebase OAuth Google Sign-in Pop-up form code
  // firebaseDB.auth().signInWithPopup(firebaseGoogleProvider).then(function(result) {
  //   // This gives you a Google Access Token. You can use it to access the Google API.
  //   var token = result.credential.accessToken;
  //   // The signed-in user info.
  //   var user = result.user;
  //   // ...
  // }).catch(function(error) {
  //   // Handle Errors here.
  //   var errorCode = error.code;
  //   var errorMessage = error.message;
  //   // The email of the user's account used.
  //   var email = error.email;
  //   // The firebase.auth.AuthCredential type that was used.
  //   var credential = error.credential;
  //   // ...
  // });
  
  return (
    <div className="App">
      <div id="firebaseui-auth-container"></div>
      <div id="welcomeMsg">
        <h1>Welcome {signedInUser}</h1>
      </div>
      <div id="signOutBtn">
        <a href='' onClick={signOut}>Sign Out</a>
      </div>
    </div>
  );
}

export default App;
