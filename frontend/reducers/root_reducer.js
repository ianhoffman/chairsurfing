import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import chairsReducer from './chairs_reducer';
import filterReducer from './filter_reducer';
import bookingsReducer from './bookings_reducer';
import reviewsReducer from './reviews_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  chairs: chairsReducer,
  filters: filterReducer,
  bookings: bookingsReducer,
  reviews: reviewsReducer
});

export default rootReducer;
