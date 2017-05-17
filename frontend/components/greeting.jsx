import React from 'react';
import {Link} from 'react-router-dom';
import SessionModal from '../modals/session_modal';
//
// import Modal from 'react-modal';
// import SessionFormContainer from './session_form_container';
// const style = require('../modals/login_modal_style');
import { withRouter } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      logIn: false
    };
    this.toggleState = this.toggleState.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  handleClick(bool) {
    this.setState({
      modalOpen: true,
      logIn: bool
    });
  }

  toggleState() {
    this.setState({
      logIn: !this.state.logIn
    });
  }

  openModal() {
    this.setState({
      modalOpen: true
    });
  }

  closeModal() {
    this.setState({
      modalOpen: false
    });
    this.props.history.push('/');
  }

  render() {
    return (this.props.loggedIn) ? (
        <div>
          <h3>Welcome, {this.props.currentUser.firstName}!</h3>
          <button onClick={this.props.logout}> Log Out </button>
        </div>
      ) : (
        <div>
          <Link to="/signup"
            onClick={this.handleClick.bind(this, false)}
            className='signup'>
            Join
          </Link>

          <Link to="/login"
            onClick={this.handleClick.bind(this, true)}
            className='login'>
            Log In
          </Link>

          <SessionModal
            modalOpen={this.state.modalOpen}
            openModal={this.openModal}
            closeModal={this.closeModal}
            toggleState={this.toggleState}
            logIn={this.state.logIn} />
        </div>
      );
  }
}

export default withRouter(Greeting);
