import React from 'react';
import GreetingContainer from './greeting_container';
import { Switch, Route } from 'react-router-dom';
import SessionFormContainer from './session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SearchContainer from './search_container';
import ChairFormContainer from './chair_form_container';
import ChairShowContainer from './chair_show_container';

const App = () => (
  <div>
    <header>
      <h1>Chair BnB</h1>
      <GreetingContainer />
    </header>

    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
    <Route exact path="/" component={SearchContainer} />
    <Switch>
      <ProtectedRoute path="/chairs/new" component={ChairFormContainer} />
      <Route exact path='/chairs/:chairId' component={ChairShowContainer} />
    </Switch>
  </div>
);

export default App;
