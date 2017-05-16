import React from 'react';
import GreetingContainer from './greeting_container';
import { Switch, Route } from 'react-router-dom';
import SessionFormContainer from './session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SearchContainer from './search_container';
import BenchFormContainer from './bench_form_container';
import BenchShowContainer from './bench_show_container';

const App = () => (
  <div>
    <header>
      <h1>Bench BnB</h1>
      <GreetingContainer />
    </header>

    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
    <Route exact path="/" component={SearchContainer} />
    <Switch>
      <ProtectedRoute path="/benches/new" component={BenchFormContainer} />
      <Route exact path='/benches/:benchId' component={BenchShowContainer} />
    </Switch>
  </div>
);

export default App;
