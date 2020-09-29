import React from 'react'

export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand navbar-dark bg-primary">
        <a class="navbar-brand" href="#">Meetup App</a>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a href="" className="nav-link">Login</a>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link">Sign-up</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
