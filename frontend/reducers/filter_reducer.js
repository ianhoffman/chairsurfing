import { UPDATE_FILTER } from '../actions/filter_actions';
import merge from 'lodash/merge';

const filterReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case UPDATE_FILTER:
      let newState = merge({}, state);
      newState[action.filter] = action.value;
      console.log(newState);
      return newState;
    default:
      return state;
  }
};

export default filterReducer;
