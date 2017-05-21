import { CREATE_BOOKING } from '../actions/booking_actions';
import merge from 'lodash/merge';

const bookingsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case CREATE_BOOKING:
      newState[action.booking.id] = action.booking;
      return newState;
    default:
      return state;
  }
};

export default bookingsReducer;
