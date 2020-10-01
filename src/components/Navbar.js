import React, { useState } from 'react';
import './Navbar.css';

// redux js file import
import store from '../js/store/index';

// React Router imports
import {
  Link,
} from "react-router-dom";

// import Font Awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function AuthenticationBtn () {
  return (
    <>
    <li className="nav-item">
      <div className="dropdown">
        <a href='#' className='nav-link dropdown-toggle' role='button' id='dropdownMenuLink' data-toggle='dropdown' aria-haspopup='true' aria-expanded='true'>
          <span className="nav-label">
            <span className="profilePicture">
              <img src={store.getState().userProfilePhotoURL} alt="" className="rounded-circle"/>
            </span>
            <span className="userWelcome">
              Welcome, {store.getState().loggedInUser}!
            </span>
            {/* <FontAwesomeIcon icon={faChevronDown} /> */}
          </span>
        </a>
        
        {/* dropdown sub-menu */}
        <div className="dropdown-menu" aria-labelledby='dropdownMenuLink'>
          <a href="" className="dropdown-item">Profile</a>
          <a href="" className="dropdown-item">Logout</a>
        </div>
      </div>

      
      {/* <div className="dropdown show">
        <a href='javascript: void(0);' className='nav-link dropdown-toggle' role='button' id='dropdownMenuLink' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
          <span className="profilePicture">
            <img src={store.getState().userProfilePhotoURL} alt="" className="rounded-circle"/>
          </span>
          <span className="userWelcome">
            Welcome, {store.getState().loggedInUser}!
          </span>
        </a>
        
        <div className="dropdown-menu" aria-labelledby='dropdownMenuLink'>
          <a href="" className="dropdown-item">Profile</a>
          <a href="" className="dropdown-item">Logout</a>
        </div>
      </div> */}
    </li>
    </>
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
  // code below is needed to make signed in username update
  const [signedInUserNameCustom, setsignedInUserNameCustom] = useState(store.getState().loggedInUser);

  store.subscribe(() => {
    setsignedInUserNameCustom(store.getState().loggedInUser);
  })
  // code above is needed to make signed in username update

  if (store.getState().loggedInUser === 'Guest') {
    return <LoginSignupBtn />;
  } else {
    return <AuthenticationBtn />;
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
