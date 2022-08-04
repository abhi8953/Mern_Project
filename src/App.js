import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlaces';
import MainNavigation from './shared/Navigation/MainNavigation';

function App() {
  return <Router>
    <MainNavigation />
    <main>
    <Switch>
    <Route path="/" exact>
      <Users />
    </Route>
    <Route path="/places/new" exact>
      <NewPlace />
    </Route>
    <Redirect to="/" />
    </Switch>
    </main>
  </Router>;
}

export default App;
