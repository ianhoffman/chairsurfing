import { RECEIVE_CHAIRS, RECEIVE_CHAIR, RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/chair_actions';
import merge from 'lodash/merge';

const initialState = {
  chairs: {},
  errors: []
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
    case RECEIVE_CHAIR:
      newState.chairs[action.chair.id] = action.chair;
      return newState;
    case RECEIVE_ERRORS:
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
