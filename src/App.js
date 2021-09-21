import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/home/home';
import SignUp from './pages/sign-up/sign-up';
import SignIn from './pages/sign-in/sign-in';
import Services from './pages/home/services/services';
// import SKills from './pages/home/skill/skill';
import Footer from './pages/home/footer/footer';
// import About from './pages/home/about/about';
import DashBoard from './pages/dashboard/dashboard';
import './styles/base.less';

const App = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <Footer />
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
        <Route exact path="/dashboard">
          <DashBoard />
        </Route>
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
