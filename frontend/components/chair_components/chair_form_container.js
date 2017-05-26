import { connect } from 'react-redux';
import ChairForm from './chair_form';
import { fetchSingleChair, createChair, updateChair } from '../../actions/chair_actions';
import { getUserChair } from '../../reducers/selectors';
import isEmpty from 'lodash/isEmpty';


const mapStateToProps = (state) => {

  return ({
    chair: getUserChair(state),
    currentUser: state.session.currentUser,
    errors: state.chairs.errors
  });
};

const mapDispatchToProps = dispatch => ({
  fetchSingleChair: (id) => dispatch(fetchSingleChair(id)),
  createChair: (chair) => dispatch(createChair(chair)),
  updateChair: (chair) => dispatch(updateChair(chair))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChairForm);
