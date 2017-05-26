import { connect } from 'react-redux';
import { submitBooking, fetchChairBookings } from '../../actions/booking_actions';
import RentalForm from './rental_form';
import { selectBookings } from '../../reducers/selectors';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
  bookings: state.bookings,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  submitBooking: booking => dispatch(submitBooking(booking)),
  fetchChairBookings: id => dispatch(fetchChairBookings(id))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(RentalForm));
