import { connect } from 'react-redux';
import ChairForm from './chair_form';
import { createChair } from '../../actions/chair_actions';

const mapStateToProps = (state) => {
  return ({
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = dispatch => ({
  createChair: (chair) => dispatch(createChair(chair))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChairForm);
