import { connect } from 'react-redux';
import BookingIndex from './booking_index';
import { fetchUserBookings } from '../../actions/booking_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  bookings: state.bookings,
  fetchInProgress: Object.keys(state.bookings).length > 0 ? false : true
});

const mapDispatchToProps = dispatch => ({
  fetchUserBookings: user => dispatch(fetchUserBookings(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingIndex);
