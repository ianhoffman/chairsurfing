export const CREATE_BOOKING = 'CREATE_BOOKING';
export const RECEIVE_BOOKINGS = 'RECEIVE_BOOKINGS';

import * as BookingsAPIUtil from '../util/bookings_api_util';

const createBooking = booking => ({
  type: CREATE_BOOKING,
  booking
});

const receiveBookings = bookings => ({
  type: RECEIVE_BOOKINGS,
  bookings
});

export const submitBooking = booking => dispatch => (
  BookingsAPIUtil.submitBooking(booking).then(
    res => dispatch(createBooking(res))
  )
);

export const fetchUserBookings = user => dispatch => (
  BookingsAPIUtil.fetchUserBookings(user).then(
    res => dispatch(receiveBookings(res))
  )
);
