import { connect } from 'react-redux';
import { updateBooking } from '../../actions/booking_actions';
import ApproveBookings from './approve_bookings';

const mapDispatchToProps = dispatch => ({
  updateBooking: booking => dispatch(updateBooking(booking))
});

export default connect(
  null,
  mapDispatchToProps
)(ApproveBookings);
