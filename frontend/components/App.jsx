import React from 'react';
import GreetingContainer from './greeting_container';
import { Link, Switch, Route } from 'react-router-dom';
import SessionFormContainer from './session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SplashPage from './splash_page';
import ChairFormContainer from './chair_components/chair_form_container';
import ChairShowContainer from './chair_components/chair_show_container';
import UserProfile from './user_profile';
import Footer from './footer';

const App = () => {

  return(
    <main>
      <header>
        <Link to='/'>
          <p id='logo'>repose</p>
        </Link>

        <GreetingContainer />
      </header>

      <Switch>
        <Route path='/chairs/:chairId' component={ChairShowContainer} />
        <ProtectedRoute path='/profile' component={UserProfile} />
        <AuthRoute path="/" component={SplashPage} />
      </Switch>

      <Footer />
    </main>
  );
};

export default App;
