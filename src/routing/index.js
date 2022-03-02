import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Archives from '../screens/Archives';
import Home from '../screens/Home';
import ShotOfTheDay from '../screens/ShotOfTheDay';

export default function Router() {
  return (
    <HashRouter>
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route path='/shot-of-the-day' component={ShotOfTheDay} />
          <Route path='/archives' component={Archives} />
          <Route path='/' component={Home} />
        </Switch>
      </React.Fragment>
    </HashRouter>
  );
}
