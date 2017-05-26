import {
    RECEIVE_USER_ERRORS,
    RECEIVE_CURRENT_USER,
    CLEAR_ERRORS,
  } from '../actions/session_actions';

import { SET_USER_CHAIR } from '../actions/chair_actions';
import merge from 'lodash/merge';


const initialState = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = initialState, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        currentUser: action.user,
        errors: []
      };
    case ADD_TO_BOOKING_INDEX:
      newState.currentUser.bookings.push(action.booking);
      return newState;
    case ADD_BOOKING:
      if(newState.currentUser.chair !== 'null') {
        newState.currentUser.chair.bookings.forEach((booking, idx) => {
          if(booking.id === action.booking.id) {
            newState.currentUser.chair.bookings[idx] = action.booking;
          }
        });
      }
      return newState;
    case RECEIVE_USER_ERRORS:
      return {
        currentUser: null,
        errors: action.errors
      };
    case RECEIVE_BOOKINGS:
      newState.currentUser.bookings = action.bookings;
      return newState;
    case CLEAR_ERRORS:
      newState.errors = [];
      return newState;
    case SET_USER_CHAIR:
      newState.currentUser.chair = action.chair;
      return newState;
    default:
      return state;
  }
};

export default SessionReducer;
