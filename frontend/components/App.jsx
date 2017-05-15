import React from 'react';
import GreetingContainer from './greeting_container';
import { Route } from 'react-router-dom';
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
    <Route path='/benches/:benchId' component={BenchShowContainer} />
    <Route exact path="/" component={SearchContainer} />
    <ProtectedRoute path="/benches/new" component={BenchFormContainer} />
  </div>
);

export default App;
