import {
  ADD_REVIEW,
  DELETE_REVIEW,
  ADD_REVIEWS,
  RECIEVE_REVIEW_ERRORS
} from '../actions/review_actions';
import merge from 'lodash/merge';

const initialState = {
  reviews: {},
  errors: []
};

const reviewsReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case ADD_REVIEWS:
      newState.reviews = action.reviews;
      return newState;
    case ADD_REVIEW:
      newState.reviews[action.review.id] = action.review;
      return newState;
    case DELETE_REVIEW:
      delete newState.reviews[action.id];
      return newState;
    case RECIEVE_REVIEW_ERRORS:
      newState.errors = action.errors;
      return newState;
    default:
      return state;
  }
};

export default reviewsReducer;
