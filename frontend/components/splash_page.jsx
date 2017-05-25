import React from 'react';
import SearchContainer from './search_components/search_container';
// import ChairIndex from './chair_components/chair_index';
// import ChairShowContainer from './chair_components/chair_show_container';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import SessionModal from '../modals/session_modal';


class SplashPage extends React.Component {
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
  }

  render() {

    const demoLink = (!this.props.loggedIn) ? (
      <Link
        onClick={this.handleClick.bind(this)}
        to='/login'
        className='button button-blue'>Demo Log In</Link>
    ) : (<div>Placeholder</div>);

    return (
      <main id='searchMain'>

        <SessionModal
          modalOpen={this.state.modalOpen}
          closeModal={this.closeModal}
          openModal={this.openModal}
          toggleState={this.toggleState}
          demo={true}
          logIn={this.state.logIn} />

        <div id='heroContainer'>
          <img id='bannerImg' src="https://res.cloudinary.com/dfuh8ucrc/image/upload/v1495042789/hero-img_ygwiys.jpg" />
          <div id='bannerContainer'>
            <h1 className='banner'>Sit down, be humble</h1>
            <h2 id='subHeader'>SF real estate is heating up. Just sleep in these chairs.</h2>
            {demoLink}
          </div>
        </div>

        <section id='searchContainer'>
          <h1 className='banner'>Comfy San Francisco Seats</h1>
          <SearchContainer />
        </section>
      </main>
    );
  }
}

export default SplashPage;
