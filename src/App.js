import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Profile from './pages/profile/profile';
import SignUp from './pages/sign-up/sign-up';
import SignIn from './pages/sign-in/sign-in';
import Home from './pages/home/home';
import DashBoard from './pages/dashboard/dashboard';

import './styles/base.less';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/signUp">
        <SignUp />
      </Route>
      <Route exact path="/signIn">
        <SignIn />
      </Route>
      <Route exact path="/dashboard">
        <DashBoard />
      </Route>
      <Route exact path="/:username">
        <Profile />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default App;
