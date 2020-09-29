import React from 'react';

// React Router imports
import {
  Link,
} from "react-router-dom";

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
          <li className="nav-item">
            <Link className="nav-link" to='/login-signup'>Login</Link>
            {/* <a href="" className="nav-link">Login</a> */}
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/login-signup'>Sign-up</Link>
            {/* <a href="" className="nav-link">Sign-up</a> */}
          </li>
        </ul>
      </nav>
    </div>
  )
}
