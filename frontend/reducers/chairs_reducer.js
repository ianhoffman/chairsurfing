import { RECEIVE_CHAIRS, 
  RECEIVE_CHAIR, 
  RECEIVE_CHAIR_ERRORS, 
  STOP_FETCHING,
  START_FETCHING,
  CLEAR_ERRORS } from '../actions/chair_actions';
import merge from 'lodash/merge';

const initialState = {
  chairs: {},
  errors: [],
  fetching: true
};

const chairsReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_CHAIRS:
      return {
        chairs: action.chairs,
        errors: []
      };
    case STOP_FETCHING: 
      newState.fetching = false;
      return newState;
    case START_FETCHING:
      newState.fetching = true;
      return newState;
    case RECEIVE_CHAIR:
      newState.chairs[action.chair.id] = action.chair;
      return newState;
    case RECEIVE_CHAIR_ERRORS:
      newState.errors = action.errors;
      return newState;
    case CLEAR_ERRORS:
      newState.errors = [];
      return newState;
    default:
      return state;
  }
};

export default chairsReducer;
