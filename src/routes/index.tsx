import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Inicial from '../pages/Inicial';
import Lab from '../pages/lab';
import Me from '../pages/me';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' exact component={Inicial} />
      <Route path='/me' component={Me} />
      <Route path='/lab' component={Lab} />
    </Switch>
  </BrowserRouter>

)

export default Routes;
