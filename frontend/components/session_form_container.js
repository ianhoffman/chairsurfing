import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup, login, clearErrors } from '../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.session.errors,
  formType: ownProps.location.pathname
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: (formType, user) => {
    return formType === '/login' ?
      dispatch(login(user)) : dispatch(signup(user));
  },
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
