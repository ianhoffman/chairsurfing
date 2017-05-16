import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import chairsReducer from './chairs_reducer';
import filterReducer from './filter_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  chairs: chairsReducer,
  filters: filterReducer
});

export default rootReducer;
