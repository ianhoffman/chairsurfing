import React from 'react';
import ChairModal from '../../modals/chair_modal';
import  { Link } from 'react-router-dom';

class CreateEditButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
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
  }

  render() {
    const {currentUser} = this.props;
    let buttonText = 'Upate your chair';
    let link = '/profile/update_chair';

    if (currentUser.chair === 'null') {
      buttonText = 'Create your chair!';
      link = '/profile/new_chair';
      setTimeout(() => {
        $(".chairButtonContainer > a").addClass('createChairButton');
      }, 2000);
    }

    return(
      <section className='chairButtonContainer'>
        <Link
          to={link}
          onClick={this.openModal}
          className='button button-blue'>
          {buttonText}
        </Link>
        <ChairModal
          modalOpen={this.state.modalOpen}
          closeModal={this.closeModal.bind(this)}
           />
      </section>
    );

  }
}

export default CreateEditButton;
