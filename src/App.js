import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavBar from './pages/home/navbar/navbar';
import Home from './pages/home/home';
import SignUp from './pages/sign-up/sign-up';
import SignIn from './pages/sign-in/sign-in';
import Services from './pages/home/services/services';

import About from './pages/home/about/about';
import './styles/base.less';

const App = () => (
  <BrowserRouter>
    <div>
      <NavBar />
      <hr />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/signUp">
          <SignUp />
        </Route>
        <Route exact path="/signIn">
          <SignIn />
        </Route>
        <Route exact path="/services">
          <Services />
        </Route>
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
