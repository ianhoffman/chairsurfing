import React from 'react';
import GreetingContainer from './greeting_container';
import { Route } from 'react-router-dom';
import SessionFormContainer from './session_form_container';
import {AuthRoute} from '../util/route_util';
import BenchIndexContainer from './bench_index_container';

const App = () => (
  <div>
    <header>
      <h1>Bench BnB</h1>
      <GreetingContainer />
    </header>
    <AuthRoute path="/login" component={SessionFormContainer}/>
    <AuthRoute path="/signup" component={SessionFormContainer}/>
    <Route exact path="/" component={BenchIndexContainer} />
  </div>
);

export default App;
