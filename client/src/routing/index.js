import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from '../screens/Home';

export default function Router() {
  return (
    <HashRouter>
      <Switch>
        <Route path='/' component={Home} />
      </Switch>
    </HashRouter>
  );
}
