import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../home';
import Dash from '../dash';
import Rating from '../rating';
import NoMatch from '../nomatch';

export default () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/dash' component={Dash} />
    <Route path='/rating' component={Rating} />
    <Route component={NoMatch} />
  </Switch>
);