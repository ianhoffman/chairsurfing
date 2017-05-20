import { connect } from 'react-redux';
import ChairForm from './chair_form';
import { createChair } from '../../actions/chair_actions';
import isEmpty from 'lodash/isEmpty';

const initialChair = {
  description: '',
  address: '',
  about: '',
  lat: 0,
  lng: 0,
  image_url: '',
  image: [],
  accepting_guests: true,
  user_id: 'NEW'
};

const mapStateToProps = (state) => {

  let chairId;
  if (isEmpty(state.chairs.chairs)) {
    chairId = null;
  } else {
    chairId = Object.keys(state.chairs.chairs)[0];
  }

  return ({
    currentUser: state.session.currentUser,
    lastChairId: chairId,
    errors: state.chairs.errors,
    chair: state.session.currentUser.chair === 'null' ?
      initialChair : state.session.currentUser.chair
  });
};

const mapDispatchToProps = dispatch => ({
  createChair: (chair) => dispatch(createChair(chair))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChairForm);
