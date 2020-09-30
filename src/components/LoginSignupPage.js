import React, { useState, useEffect } from 'react';
import { Redirect, useHistory } from "react-router-dom";

// redux js file import
import store from '../js/store/index';
import { updateUser } from '../js/actions/index';

// firebase, firebaseUI, css for firebaseUI
import '../../node_modules/firebaseui/dist/firebaseui.css';
import firebase from '../firebase';
import * as firebaseui from 'firebaseui'


// Initialize the FirebaseUI Widget using Firebase.
let firebaseUI = new firebaseui.auth.AuthUI(firebase.auth());

export default function LoginSignupPage() {  
  const [loggedInUser, setLoggedInUser] = useState(store.getState().loggedInUser);

  let history = useHistory();

  let firebaseUIConfig = {
    signInFlow: 'redirect',
    //  signInSuccessUrl doesn't work when there's a callback option configured
    // signInSuccessUrl: 'http://www.bing.com',
    // signInSuccessUrl: 'http://localhost:3000/',
    signInOptions: [
      // List of OAuth providers supported.
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ],
    // Other config options...
    callbacks: {
      signInSuccess: () => {
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            // update Redux store with new username
            store.dispatch( updateUser(user.displayName) );
            console.log(user.displayName);
            setLoggedInUser(user.displayName);
          } else {
            // No user is signed in.
          }
        });
      }
    }
  }
  
  useEffect(() => {
    firebaseUI.start('#firebaseui-auth-container', firebaseUIConfig);
  }, []);

  store.subscribe(() => {
    

    // if (store.getState().loggedInUser != 'Guest') {
    //   window.location.href = 'http://localhost:3000';
    // }
  })

  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      setLoggedInUser(store.getState().loggedInUser);

      // document.getElementById('firebaseui-auth-container').style.display= 'none';
      // document.getElementById('signOutBtn').style.display= 'block';

      if (loggedInUser !== 'Guest') {
        console.log(loggedInUser);
        // window.location.href = 'http://localhost:3000';
        
        history.push('/');
      }
    } else {      
      // update Redux store with new username
      store.dispatch( updateUser('Guest') );
      
      setLoggedInUser(store.getState().loggedInUser);

      document.getElementById('firebaseui-auth-container').style.display= 'block';
      document.getElementById('signOutBtn').style.display= 'none';
    }
  });

  // Firebase OAuth signout function
  function signOut(e) {
    e.preventDefault();
    firebase.auth().signOut().then(() => {
      console.log('all users signed out');
      document.getElementById('signOutBtn').style.display = 'none';
      firebaseUI.start('#firebaseui-auth-container', firebaseUIConfig);document.getElementById('firebaseui-auth-container').style.display = 'block';
    }, err => {
      console.error('Sign Out Error', err);
    });
  }

  return (
    <div id='loginSignupPage'>
      <div id="welcomeMsg">
        <h1>Welcome {loggedInUser}</h1>
      </div>
      <div id="firebaseui-auth-container"></div>
      <div id="signOutBtn">
        <button onClick={signOut}>Sign Out</button>
      </div>
    </div>
  )
}