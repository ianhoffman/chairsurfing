import { RECEIVE_BOOKINGS, RECEIVE_BOOKING } from '../actions/booking_actions';
import merge from 'lodash/merge';

const bookingsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_BOOKINGS:
      newState = merge({}, action.bookings);
      return newState;
    case RECEIVE_BOOKING:
      newState = merge({}, state);
      newState[action.booking.id] = action.booking;
      return newState;
    default:
      return state;
  }
};

export default bookingsReducer;
