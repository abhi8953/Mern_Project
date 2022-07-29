import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlaces';

function App() {
  return <Router>
    <Switch>
    <Route path="/" exact>
      <Users />
    </Route>
    <Route path="/places/new" exact>
      <NewPlace />
    </Route>
    <Redirect to="/" />
    </Switch>
  </Router>;
}

export default App;
