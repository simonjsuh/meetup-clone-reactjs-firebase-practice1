import React from 'react';
import './App.css';

// import firebase
import firebase from './firebase';

// redux js file import
import store from './js/store/index';
import { updateUser } from './js/actions/index';

// React Router imports
import {
  Switch,
  Route,
} from "react-router-dom";

// component imports
import Navbar from './components/Navbar'; 
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LoginSignupPage from './components/LoginSignupPage';
import CreateGroup from './components/CreateGroup';

// react router
import { BrowserRouter } from 'react-router-dom';

function App() {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      store.dispatch( updateUser({ 
        loggedInUserUsername: user.displayName, 
        userProfilePhotoURL: user.photoURL
      }) );
    } else {
      console.log('no detected of logged in user found');
    }
  });

  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/login-signup' component={LoginSignupPage} />
        <Route path='/userprofile' component={UserProfile} />
        <Route path='/creategroup' component={CreateGroup} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
