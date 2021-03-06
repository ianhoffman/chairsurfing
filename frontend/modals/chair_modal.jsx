import Modal from 'react-modal';
import React from 'react';
import ChairFormContainer from '../components/chair_components/chair_form_container';
const style = require('./chair_modal_style');


class ChairModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { modalOpen, closeModal } = this.props;
    return(
      <Modal
        style={style}
        isOpen={modalOpen}
        onRequestClose={closeModal}
        contentLabel="Modal">
        <ChairFormContainer
          closeModal={closeModal}
          />
      </Modal>
    );
  }
}

export default ChairModal;
