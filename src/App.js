import React from 'react';
import './App.css';
import '../node_modules/firebaseui/dist/firebaseui.css';
import { firebaseDB, firebaseUI } from './firebase';

function App() {
  firebaseUI.start('#firebaseui-auth-container', {
    signInSuccessUrl: 'http://www.simonjsuh.com',
    signInOptions: [
      // List of OAuth providers supported.
      firebaseDB.firebase_.auth.EmailAuthProvider.PROVIDER_ID,
      firebaseDB.firebase_.auth.GoogleAuthProvider.PROVIDER_ID,
      firebaseDB.firebase_.auth.FacebookAuthProvider.PROVIDER_ID
    ],
    // Other config options...
  });

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
    </div>
  );
}

export default App;
