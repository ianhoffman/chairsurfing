import React from 'react';
import {Link} from 'react-router-dom';
import SessionModal from '../modals/session_modal';
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
    this.props.history.goBack();
  }

  render() {
    return (this.props.loggedIn) ? (
        <div>
          <button onClick={() => {
              this.closeModal();
              this.props.logout().then(
                res => {
                  this.props.history.push('/');
                }
              );
            }}> Log Out </button>
          <ul className='loggedIn-menu'>
            <li className="fa fa-search"></li>
            <li className='fa fa-navicon'></li>
          </ul>
        </div>
      ) : (
        <div>
          <Link to="/signup"
            onClick={this.handleClick.bind(this, false)}
            className='button button-blue'>
            Join
          </Link>

          <Link to="/login"
            onClick={this.handleClick.bind(this, true)}
            className='button button-white'>
            Log In
          </Link>

          <SessionModal
            modalOpen={this.state.modalOpen}
            openModal={this.openModal}
            closeModal={this.closeModal}
            toggleState={this.toggleState}
            demo={false}
            logIn={this.state.logIn} />
        </div>
      );
  }
}

export default withRouter(Greeting);
