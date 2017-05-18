import { connect } from 'react-redux';
import UserProfile from './user_profile';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser
  };
};

export default connect(
  mapStateToProps
)(UserProfile);
