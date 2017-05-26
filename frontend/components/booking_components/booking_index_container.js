import { connect } from 'react-redux';
import BookingIndex from './booking_index';
import { fetchUserBookings } from '../../actions/booking_actions';

const mapStateToProps = state => {
  return({
    currentUser: state.session.currentUser,
    bookings: state.session.currentUser.bookings
  });
};

const mapDispatchToProps = dispatch => ({
  fetchUserBookings: user => dispatch(fetchUserBookings(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingIndex);
