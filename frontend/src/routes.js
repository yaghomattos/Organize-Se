import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login/index';
import Register from './pages/Register/index';
import Calculator from './pages/Calculator/index';
import Perfil from './pages/Perfil/index';
import Outlays from './pages/Outlays/index';
import Minors from './pages/Minors-Finance/index';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ Login } />
        <Route path="/register" component={ Register } />
        <Route path="/calc" component={ Calculator } />
        <Route path="/perfil" component={ Perfil } />
        <Route path="/outlays" component={ Outlays } />
        <Route path="/minors" component={ Minors } />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
