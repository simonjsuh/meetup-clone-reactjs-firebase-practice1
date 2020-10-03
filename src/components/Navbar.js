import React, { useState } from 'react';
import './Navbar.css';

// import firebase
import firebase from '../firebase';

// redux js file import
import store from '../js/store/index';

// React Router imports
import {
  Link,
} from "react-router-dom";

function AuthenticationBtn () {
  const [userProfileImage, setUserProfileImage] = useState(store.getState().userProfilePhotoURL);
  const [userUsername, setUserUsername] = useState(store.getState().loggedInUser);

  store.subscribe(() => {
    // setLoggedInUser(store.getState().loggedInUser);
    // setLoggedInUserProfilePicURL(store.getState().userProfilePhotoURL);

    setUserProfileImage(store.getState().userProfilePhotoURL);
    setUserUsername(store.getState().loggedInUser);
  })

  function signOut() {
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
      console.log('signout has been successfully accomplished');

      window.location = '/';
    }).catch(function(error) {
      // An error happened.
      console.log('signout error has occured, please check');
    });
  }
  
  return (
    <div id='loggedInProfileCornerArea'>
      <li className="nav-item">
        <div className="dropdown">
          <a href='#' className='nav-link dropdown-toggle' role='button' id='dropdownMenuLink' data-toggle='dropdown' aria-haspopup='true' aria-expanded='true'>
            <span className="nav-label">
              <span className="profilePicture">
                <img src={userProfileImage} alt="" className="rounded-circle"/>
              </span>
              <span className="userWelcome">
                Welcome, {userUsername}!
              </span>
              {/* <FontAwesomeIcon icon={faChevronDown} /> */}
            </span>
          </a>
          
          {/* dropdown sub-menu */}
          <div className="dropdown-menu" aria-labelledby='dropdownMenuLink'>
            <a href="/userprofile" className="dropdown-item">Profile</a>
            <a href="" className="dropdown-item" onClick={() => {signOut()}}>Logout</a>
          </div>
        </div>
      </li>
    </div>
  )
}

function LoginSignupBtn () {
  return (
    <>
    <li className="nav-item">
      <Link className="nav-link" to='/login-signup'>Login</Link>
      {/* <a href="" className="nav-link">Login</a> */}
    </li>
    <li className="nav-item">
      <Link className="nav-link" to='/login-signup'>Sign-up</Link>
      {/* <a href="" className="nav-link">Sign-up</a> */}
    </li>
    </>
  )
}

function AuthenticationVSLoginSignupBtn () {
  const [loggedIn, setLoggedIn] = useState(false);

  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      setLoggedIn(true);
    } else {
      console.log('no detected of logged in user found');
      setLoggedIn(false);
    }
  });

  if (loggedIn) {
    return <AuthenticationBtn />;
  } else {
    // console.log('returned login button');
    return <LoginSignupBtn />;
  }
}

export default function Navbar() {
  return (
    <div id='main-navbar'>
      <nav className="navbar navbar-expand navbar-dark bg-primary">
        <a className="navbar-brand" href="/">Meetup App</a>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to='/'>Home</Link>
            {/* <a href="" className="nav-link">Login</a> */}
          </li>
          <AuthenticationVSLoginSignupBtn />
        </ul>
      </nav>
    </div>
  )
}
