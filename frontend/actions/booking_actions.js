export const ADD_BOOKING = 'ADD_BOOKING';
export const RECEIVE_BOOKINGS = 'RECEIVE_BOOKINGS';
export const ADD_TO_BOOKING_INDEX = 'ADD_TO_BOOKING_INDEX';

import * as BookingsAPIUtil from '../util/bookings_api_util';

const addBooking = booking => ({
  type: ADD_BOOKING,
  booking
});

const receiveBookings = bookings => ({
  type: RECEIVE_BOOKINGS,
  bookings
});

const addToBookingIndex = booking => ({
  type: ADD_TO_BOOKING_INDEX,
  booking
});

export const submitBooking = booking => dispatch => (
  BookingsAPIUtil.submitBooking(booking).then(
    res => {
      dispatch(addBooking(res));
      dispatch(addToBookingIndex(res));
      return res;
    }
  )
);

export const fetchUserBookings = user => dispatch => (
  BookingsAPIUtil.fetchUserBookings(user).then(
    res => {
      dispatch(receiveBookings(res));
      return res;
    }
  )
);

export const updateBooking = booking => dispatch => (
  BookingsAPIUtil.updateBooking(booking).then(
    res => {
      dispatch(addBooking(res));
      return res;
    }
  )
);
