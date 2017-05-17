import React from 'react';
import ChairMap from './chair_map';
import ChairIndex from './chair_index';
import FilterForm from './filter_form';
import ChairShowContainer from './chair_show_container';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import SessionModal from '../modals/session_modal';


class Search extends React.Component {
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
    const { chairs, fetchAllChairs, updateFilter } = this.props;

    const demoLink = (!this.props.loggedIn) ? (
      <Link
        onClick={this.handleClick.bind(this)}
        to='/login'
        className='demo'>Demo Log In</Link>
    ) : (<div>Placeholder</div>);

    return (
      <main>

        <SessionModal
          modalOpen={this.state.modalOpen}
          closeModal={this.closeModal}
          openModal={this.openModal}
          toggleState={this.toggleState}
          logIn={this.state.logIn} />

        <div id='heroContainer'>
          <img id='bannerImg' src="/assets/hero-img.png" />
          <div id='bannerContainer'>
            <h1 id='banner'>Find Your Perfect Chair</h1>
            <h2 id='subHeader'>SF real estate is heating up. Just sleep in these chairs.</h2>
            {demoLink}
          </div>
        </div>

        <FilterForm
          updateFilter={updateFilter} />

        <ChairMap
          chairs={chairs}
          updateFilter={updateFilter} />

        <ChairIndex
          chairs={chairs}
          fetchAllChairs={fetchAllChairs} />
      </main>
    );
  }
}

export default Search;
