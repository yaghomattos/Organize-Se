import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login/index';
import Register from './pages/Register/index';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ Login } />
        <Route path="/register" component={ Register } />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
