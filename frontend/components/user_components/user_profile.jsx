import React from 'react';
import ChairModal from '../../modals/chair_modal';
import  { Link } from 'react-router-dom';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    // $('.createChairButton').animate()
  }

  handleClick(bool) {
    this.setState({
      modalOpen: true,
      logIn: bool
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
    const {currentUser} = this.props;

    return(currentUser.chair === 'null') ? (
      <section className='chairButtonContainer'>
        <Link
          to='/profile/create_chair'
          onClick={this.openModal}
          className='createChairButton button button-blue'>
          Create your chair!
        </Link>
        <ChairModal
          modalOpen={this.state.modalOpen}
          create={true}
          closeModal={this.closeModal} />
      </section>
    ) : (
      <a>
        'YOU HAVE A CHAIR'
      </a>
    );

  }
}

export default UserProfile;
