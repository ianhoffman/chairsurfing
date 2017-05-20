import React from 'react';
import ChairModal from '../../modals/chair_modal';
import  { Link } from 'react-router-dom';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   modalOpen: false,
    // };
    // this.openModal = this.openModal.bind(this);
    // this.closeModal = this.closeModal.bind(this);
  }

  // componentDidMount() {
  //   // $('.createChairButton').animate()
  // }
  //
  // handleClick(bool) {
  //   this.setState({
  //     modalOpen: true,
  //     logIn: bool
  //   });
  // }
  //
  // openModal() {
  //   this.setState({
  //     modalOpen: true
  //   });
  // }
  //
  // closeModal() {
  //   this.setState({
  //     modalOpen: false
  //   });
  // }

  render() {
    // const {currentUser} = this.props;
    // let buttonColor = 'button-white'
    // let buttonText = 'Upate your chair'
    //
    // if (currentUser.chair === null) {
    //   buttonColor = 'button-blue';
    //   buttonText = 'Create your chair!'
    // }

    /* PLACE HOLDER

    <section className='chairButtonContainer'>
      <Link
        to='/profile/new'
        onClick={this.openModal}
        className={`createChairButton button ${buttonColor}`}>
        {buttonText}
      </Link>
      <ChairModal
        modalOpen={this.state.modalOpen}
        create={true}
        closeModal={this.closeModal} />
    </section>

    */

    return(
      <section>
        PLACEHOLDER
      </section>
    );

  }
}

export default UserProfile;
