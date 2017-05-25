export const ADD_REVIEW = 'ADD_REVIEW';
export const DELETE_REVIEW = 'DELETE_REVIEW';
export const ADD_REVIEWS = 'ADD_REVIEWS';
export const RECIEVE_REVIEW_ERRORS = 'RECIEVE_REVIEW_ERRORS';
export const CLEAR_REVIEW_ERRORS = 'CLEAR_ERRORS';

import * as ReviewsAPIUtil from '../util/reviews_api_util';

const addReview = review => ({
  type: ADD_REVIEW,
  review
});

const removeReview = id => ({
  type: DELETE_REVIEW,
  id
});

const addReviews = reviews => ({
  type: ADD_REVIEWS,
  reviews
});

const recieveReviewErrors = errors => ({
  type: RECIEVE_REVIEW_ERRORS,
  errors
});

const clearReviewErrors = () => ({
  type: CLEAR_REVIEW_ERRORS
});

export const fetchAllReviews = id => dispatch => (
  ReviewsAPIUtil.fetchAllReviews(id).then(
    res => {
      dispatch(addReviews(res));
      return res;
    }
  )
);

export const createReview = review => dispatch => (
  ReviewsAPIUtil.createReview(review).then(
    res => {
      dispatch(addReview(res));
      dispatch(clearReviewErrors());
      return res;
    },
    error => {
      dispatch(recieveReviewErrors(error.responseJSON));
    }
  )
);

export const updateReview = review => dispatch => (
  ReviewsAPIUtil.updateReview(review).then(
    res => {
      dispatch(addReview(res));
      dispatch(clearReviewErrors());
      return res;
    },
    error => {
      dispatch(recieveReviewErrors(error));
    }
  )
);

export const deleteReview = id => dispatch => (
  ReviewsAPIUtil.deleteReview(id).then(
    res => {
      dispatch(removeReview(id));
      return res;
    }
  )
);
