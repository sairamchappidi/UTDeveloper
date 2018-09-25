import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../home';
import Login from '../login';
import NoMatch from '../nomatch';

export default () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/login' component={Login} />
    <Route component={NoMatch} />
  </Switch>
);