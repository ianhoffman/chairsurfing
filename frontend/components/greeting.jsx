import React from 'react';
import {Link} from 'react-router-dom';
import SessionModal from '../modals/session_modal';
import { withRouter } from 'react-router-dom';
import CreateEditButton from './chair_components/create_edit_button';
import ChairModal from '../modals/chair_modal';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionModalOpen: false,
      logIn: false,
      chairModalOpen: false
    };
    this.toggleState = this.toggleState.bind(this);
    this.openSessionModal = this.openSessionModal.bind(this);
    this.closeSessionModal = this.closeSessionModal.bind(this);
    this.logout = this.logout.bind(this);
    this.showMenu = this.showMenu.bind(this);
    this.showSearch = this.showSearch.bind(this);
    this.showBookings = this.showBookings.bind(this);

    this.handleChairClick = this.handleChairClick.bind(this);
    this.openChairModal = this.openChairModal.bind(this);
    this.closeChairModal = this.closeChairModal.bind(this);
  }

  handleChairClick(bool) {
    this.setState({
      chairModalOpen: true
    });
  }

  openChairModal(e) {
    e.preventDefault();
    this.setState({
      chairModalOpen: true
    });
  }

  closeChairModal() {
    this.setState({
      chairModalOpen: false
    });
  }

  showMenu() {
    const $menu = $('.dropdown-menu');
    const $icon = $('.dropdown .fa-navicon');
    if($menu.css('display')==='flex') {
      $menu.css('display', 'none');
    } else {
      $menu.css('display', 'flex');
    }
  }

  handleSessionClick(bool) {
    this.setState({
      sessionModalOpen: true,
      logIn: bool
    });
  }

  toggleState() {
    this.setState({
      logIn: !this.state.logIn
    });
  }

  openSessionModal() {
    this.setState({
      sessionModalOpen: true
    });
  }

  closeSessionModal() {
    this.setState({
      sessionModalOpen: false
    });
  }

  logout(e) {
    e.preventDefault();
    this.props.logout().then(
      res => {
        this.props.history.push('/');
      }
    );
    if (this.state.sessionModalOpen) {
      this.setState({
        sessionModalOpen: false
      });
    }
  }

  showSearch() {
    const $search = $('.user-cp > div');
    const $bookings = $('.bookings-index');
    $search.css('display', 'flex');
    $bookings.css('display', 'none');
  }

  showBookings() {
    const $search = $('.user-cp > div');
    const $bookings = $('.bookings-index');
    $search.css('display', 'none');
    $bookings.css('display', 'flex');
  }

  render() {
    // for later:
    // <ul className='loggedIn-menu'>
    //   <li className="fa fa-search"></li>
    //   <li className='fa fa-navicon'></li>
    // </ul>
    const {currentUser} = this.props;

    return (this.props.loggedIn) ? (
      <div className='dropdown'>
        <i
          className='fa fa-search'
          onClick={this.showSearch}>
        </i>
        <i
          className='fa fa-navicon'
          onClick={this.showMenu}></i>
        <div className='dropdown-menu'>
          {
            currentUser.chair === 'null' ? (
              <Link to={`/profile/new_chair`}
                onClick={this.handleChairClick}
                className=''>
                Create Chair
              </Link>
            ) : (
              <div className='view-edit-chair'>
                <Link to={`/profile/edit_chair`}
                  onClick={this.handleChairClick}
                  className=''>
                  Edit Chair
                </Link>
                <Link to={`/chairs/${currentUser.chair_id}/description`}
                  className=''>
                  Your Chair
                </Link>
              </div>
            )
          }
          <Link to={`/profile/`}
            onClick={this.showBookings}
            className=''>
            Your Bookings
          </Link>
          <a className=''
            onClick={this.logout}> Log Out </a>
        </div>

        <ChairModal
          modalOpen={this.state.chairModalOpen}
          closeModal={this.closeChairModal}
          />
      </div>
      ) : (
        <div>
          <Link to="/signup"
            onClick={this.handleSessionClick.bind(this, false)}
            className='button button-blue'>
            Join
          </Link>

          <Link to="/login"
            onClick={this.handleSessionClick.bind(this, true)}
            className='button button-white'>
            Log In
          </Link>

          <SessionModal
            modalOpen={this.state.sessionModalOpen}
            openModal={this.openSessionModal}
            closeModal={this.closeSessionModal}
            toggleState={this.toggleState}
            demo={false}
            logIn={this.state.logIn} />
        </div>
      );
  }
}

export default withRouter(Greeting);
