import React from 'react';
import GreetingContainer from './greeting_container';
import { withRouter, Link, Switch, Route } from 'react-router-dom';
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
          <img id='logo' src='https://res.cloudinary.com/dfuh8ucrc/image/upload/v1495839614/Screen_Shot_2017-05-26_at_15.59.37_xq4dau.png'/>
        </Link>

        <GreetingContainer />
      </header>

      <Switch>
        <Route path='/chairs/:chairId' component={ChairShowContainer} />
        <ProtectedRoute exact path='/profile' component={UserProfile} />
        <AuthRoute path="/" component={SplashPage} />
      </Switch>

      <Footer />
    </main>
  );
};

export default withRouter(App);
