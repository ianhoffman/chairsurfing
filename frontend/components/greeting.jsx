import React from 'react';
import {Link} from 'react-router-dom';
import SessionModal from '../modals/session_modal';
import { withRouter } from 'react-router-dom';
import CreateEditButton from './chair_components/create_edit_button';

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
    this.logout = this.logout.bind(this);
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

  logout(e) {
    e.preventDefault();
    this.props.logout().then(
      res => {
        this.props.history.push('/');
      }
    );
    if (this.state.modalOpen) {
      this.setState({
        modalOpen: false
      });
    }
  }

  render() {
    // for later:
    // <ul className='loggedIn-menu'>
    //   <li className="fa fa-search"></li>
    //   <li className='fa fa-navicon'></li>
    // </ul>
    const {currentUser} = this.props;

    return (this.props.loggedIn) ? (
        <div>
          {
            currentUser.chair === 'null' ? (
              <CreateEditButton currentUser={this.props.currentUser} />
            ) : (
              <Link to={`/chairs/${currentUser.chair.id}/description`}
                className='button button-blue'>
                Your Chair
              </Link>
            )
          }
          <a className='button button-white'
              onClick={this.logout}> Log Out </a>
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
