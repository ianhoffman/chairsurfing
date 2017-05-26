import { connect } from 'react-redux';
import { approveBooking, denyBooking } from '../../actions/booking_actions';
import ApproveBookings from './approve_bookings';

const mapDispatchToProps = dispatch => ({
  approveBooking: booking => dispatch(approveBooking(booking)),
  denyBooking: booking => dispatch(denyBooking(booking))
});

export default connect(
  null,
  mapDispatchToProps
)(ApproveBookings);
