import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Users from './containers/Users';
import User from './components/User'; 

function Routes() {
  return (
    <Router>
    <Switch>
      <Route exact path="/" component={Users} /> 
      <Route exact path="/users/:userId" component={User} /> 
    </Switch>
    </Router>
  );
}

export default Routes;
