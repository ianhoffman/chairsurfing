import { RECEIVE_CHAIRS, RECEIVE_CHAIR } from '../actions/chair_actions';
import merge from 'lodash/merge';

const chairsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CHAIRS:
      return action.chairs;
    case RECEIVE_CHAIR:
      let newState = merge({}, state);
      newState[action.chair.id] = action.chair;
      return newState;
    default:
      return state;
  }
};

export default chairsReducer;
