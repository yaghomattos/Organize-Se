import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login/index';
import Register from './pages/Register/index';
import Calculator from './pages/Calculator/index';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ Login } />
        <Route path="/register" component={ Register } />
        <Route path="/calc" component={ Calculator } />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
