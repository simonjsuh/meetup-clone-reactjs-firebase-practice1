import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";

// redux js file import
import store from '../js/store/index';
import { updateUser } from '../js/actions/index';

// firebase, firebaseUI, css for firebaseUI
import '../../node_modules/firebaseui/dist/firebaseui.css';
import firebase from '../firebase';
import * as firebaseui from 'firebaseui'


// set login persistence so users can close and reopen browser and still be logged in
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
.then(() => {
  // console.log('login persisted');
});

// Initialize the FirebaseUI Widget using Firebase.
let firebaseUI = new firebaseui.auth.AuthUI(firebase.auth());

export default function LoginSignupPage() {  
  let history = useHistory();
  
  useEffect(() => {
    let firebaseUIConfig = {
      signInFlow: 'redirect',
      //  signInSuccessUrl doesn't work when there's a callback option configured
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
              // console.log(user.photoURL);
              // update Redux store with new username
              store.dispatch( updateUser({ 
                loggedInUserUsername: user.displayName, 
                userProfilePhotoURL: user.photoURL
              }) );
            } else {
              // No user is signed in.
            }
          });

          // generate session code and session expiration time
        }
      }
    }

    firebaseUI.start('#firebaseui-auth-container', firebaseUIConfig);
  }, []);

  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      console.log('user is logged in');
      
      // update Redux store with new username
      store.dispatch( updateUser({
        loggedInUserUsername: user.displayName, 
        userProfilePhotoURL: user.photoURL
      }) );

      // if (loggedInUser !== 'Guest') {
      //   history.push('/');
      // }

      history.push('/');
    } else {      
      console.log('user is not logged in');

      // update Redux store with new username
      store.dispatch( updateUser({
        loggedInUserUsername: '', 
        userProfilePhotoURL: ','
      }) );

      // document.getElementById('firebaseui-auth-container').style.display= 'block';
      // document.getElementById('signOutBtn').style.display= 'none';
    }
  });

  return (
    <div id='loginSignupPage'>
      <h2>Sign-up/Sign-in Options</h2>
      <div id="firebaseui-auth-container"></div>
    </div>
  )
}