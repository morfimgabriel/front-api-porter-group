import React from 'react';

import { Switch, Route } from 'react-router-dom';

import residents from '../pages/Residents';
import apartments from '../pages/Apartments';
import dashboard from '../pages/Dashboard';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={dashboard} />
    <Route path="/apartments" component={apartments} />
    <Route path="/residents" component={residents} />
  </Switch>
);

export default Routes;