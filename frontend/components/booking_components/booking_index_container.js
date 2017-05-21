import { connect } from 'react-redux';
import BookingIndex from './booking_index';
import { fetchUserBookings } from '../../actions/booking_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchUserBookings: user => dispatch(fetchUserBookings(user))
});

export default connect(
  mapStateToProps
)(BookingIndex);
