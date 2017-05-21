export const CREATE_BOOKING = 'CREATE_BOOKING';

import * as BookingsAPIUtil from '../util/bookings_api_util';

const createBooking = booking => ({
  type: CREATE_BOOKING,
  booking
});

export const submitBooking = booking => dispatch => (
  BookingsAPIUtil.submitBooking(booking).then(
    res => dispatch(createBooking(res))
  )
);
