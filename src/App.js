import React from 'react';
import './App.css';

// React Router imports
import {
  Switch,
  Route,
} from "react-router-dom";

// component imports
import Navbar from './components/Navbar';
import Home from './components/Home';
import LoginSignupPage from './components/LoginSignupPage';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/login-signup' component={LoginSignupPage} />
      </Switch>
      {/* <LoginSignupPage /> */}
    </div>
    </BrowserRouter>
  );
}

export default App;
