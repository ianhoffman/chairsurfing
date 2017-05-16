import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup, login, clearErrors } from '../actions/session_actions';

const mapStateToProps = (state) => {
  return ({
    loggedIn: Boolean(state.session.currentUser),
    errors: state.session.errors
  });
};

const mapDispatchToProps = (dispatch) => ({
  processForm: (logIn, user) => {
    return logIn ?
      dispatch(login(user)) : dispatch(signup(user));
  },
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
