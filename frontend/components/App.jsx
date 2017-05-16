import React from 'react';
import GreetingContainer from './greeting_container';
import { Link, Switch, Route } from 'react-router-dom';
import SessionFormContainer from './session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SearchContainer from './search_container';
import ChairFormContainer from './chair_form_container';
import ChairShowContainer from './chair_show_container';

const App = () => (
  <div>
    <header>
      <Link to='/'>
        <img src="https://assets.couchsurfing.com/assets/logo-orange-58ccd2edda8895d1e1742f7744683e61f2c6fa069290a9ff012ef09d51ea643b.png" />
      </Link>

      <GreetingContainer />
    </header>

    <Switch>
      <ProtectedRoute path="/chairs/new" component={ChairFormContainer} />
      <Route exact path='/chairs/:chairId' component={ChairShowContainer} />
      <Route path="/" component={SearchContainer} />
    </Switch>
  </div>
);

export default App;
