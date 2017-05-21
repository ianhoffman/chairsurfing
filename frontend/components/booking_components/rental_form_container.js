import { connect } from 'react-redux';
import { submitBooking } from '../../actions/booking_actions';
import RentalForm from './rental_form';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  submitBooking: booking => dispatch(submitBooking(booking))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RentalForm);
