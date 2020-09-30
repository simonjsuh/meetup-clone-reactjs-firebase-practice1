import React, { useState, useEffect } from 'react';
import './App.css';

// redux js file import
import store from './js/store/index';

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
  const [signedInUserNameCustom, setsignedInUserNameCustom] = useState(store.getState().loggedInUser);

  useEffect(() => {
    setsignedInUserNameCustom(store.getState().loggedInUser);
  }, []);

  store.subscribe(() => {
    setsignedInUserNameCustom(store.getState().loggedInUser);
  })

  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <h1>Welcome {signedInUserNameCustom}</h1>
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
