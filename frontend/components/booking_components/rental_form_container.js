import { connect } from 'react-redux';
import { submitBooking, fetchBookings } from '../../actions/booking_actions';
import RentalForm from './rental_form';
import { selectBookings } from '../../reducers/selectors';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  submitBooking: booking => dispatch(submitBooking(booking)),
  fetchBookings: id => dispatch(fetchBookings(id))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(RentalForm));
