import Modal from 'react-modal';
import React from 'react';
import SessionFormContainer from '../components/session_form_container';
const style = require('./login_modal_style');

const SessionModal = ({
  modalOpen,
  closeModal,
  openModal,
  toggleState,
  logIn
}) => (
  <Modal
    isOpen={modalOpen}
    style={style}
    contentLabel="Modal">
    <SessionFormContainer
      closeModal={closeModal}
      openModal={openModal}
      toggleState={toggleState}
      logIn={logIn} />
  </Modal>
);

export default SessionModal;
