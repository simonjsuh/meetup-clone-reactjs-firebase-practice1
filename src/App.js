import React, { useState } from 'react';
import './App.css';

// component imports
import Navbar from './components/Navbar';
import LoginSignupPage from './components/LoginSignupPage';

// React Router imports
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <LoginSignupPage /> */}
      <h2>Upcoming Meetups Near You:</h2>
    </div>
  );
}

export default App;
