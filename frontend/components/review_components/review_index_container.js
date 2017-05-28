import { connect } from 'react-redux';
import {
  fetchAllReviews,
  createReview,
  updateReview,
  deleteReview,
  startLoader
} from '../../actions/review_actions';
import ReviewIndex from './review_index';

const mapStateToProps = (state) => ({
  reviews: state.reviews.reviews,
  errors: state.reviews.errors,
  currentUser: state.session.currentUser,
  loading: state.reviews.loading
});

const mapDispatchToProps = dispatch => ({
  fetchAllReviews: id => dispatch(fetchAllReviews(id)),
  createReview: review => dispatch(createReview(review)),
  updateReview: review => dispatch(updateReview(review)),
  deleteReview: review => dispatch(deleteReview(review)),
  startLoader: () => dispatch(startLoader())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewIndex);
