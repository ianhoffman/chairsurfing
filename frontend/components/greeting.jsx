import React from 'react';
import {Link} from 'react-router-dom';
import Modal from 'react-modal';
import SessionFormContainer from './session_form_container';
const style = require('../modals/login_modal_style');
import { withRouter } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      logIn: false
    };
  }

  handleClick(bool) {
    this.setState({
      modalOpen: true,
      logIn: bool
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

          <Modal
            isOpen={this.state.modalOpen}
            style={style}
            contentLabel="Modal">
            <SessionFormContainer
              logIn={this.state.logIn} />
          </Modal>
        </div>
      );
  }
}

export default withRouter(Greeting);
