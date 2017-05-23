import { RECEIVE_BOOKINGS } from '../actions/booking_actions';
import merge from 'lodash/merge';

const bookingsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    // case RECEIVE_BOOKINGS:
    //   return merge(newState, action.bookings);
    default:
      return state;
  }
};

export default bookingsReducer;
