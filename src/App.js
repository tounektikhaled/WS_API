import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

import Users from './Components/Users.js/Users';
import Profile from './Components/Profile/Profile';
import Comments from './Components/Comments/Comments';
const App = () => {
  return (
    <div className='container-fluid'>
      <BrowserRouter>
        <Route exact path='/' render={() => <Users />} />
        <Route
          // exact
          path='/user/:id'
          render={(props) => <Profile {...props} />}
        />
        <Route
          exact
          path='/posts/:id'
          render={(props) => <Comments {...props} />}
        />
      </BrowserRouter>
    </div>
  );
};

export default App;
