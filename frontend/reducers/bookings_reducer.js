import { RECEIVE_BOOKINGS, CLEAR_BOOKINGS, RECEIVE_BOOKING } from '../actions/booking_actions';
import merge from 'lodash/merge';

const bookingsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_BOOKINGS:
      return merge(newState, action.bookings);
    case RECEIVE_BOOKING:
      newState[action.booking.id] = action.booking;
      return newState;
    case CLEAR_BOOKINGS:
      return {};
    default:
      return state;
  }
};

export default bookingsReducer;
