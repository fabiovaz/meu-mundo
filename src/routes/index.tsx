import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ChangeBackground from '../pages/changeBackground';
import Family from '../pages/Family';
import Inicial from '../pages/Inicial';
import Lab from '../pages/lab';
import Me from '../pages/me';
import notFound from '../pages/notFound';
import Skills from '../pages/skills';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' exact component={Inicial} />
      <Route path='/me' component={Me} />
      <Route path='/skills' component={Skills} />
      <Route path='/family' component={Family} />


      <Route path='/lab' component={Lab} />
      <Route path='/background' component={ChangeBackground} />
      <Route component={notFound} />
    </Switch>
  </BrowserRouter>

)

export default Routes;
