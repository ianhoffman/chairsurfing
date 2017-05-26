export const ADD_BOOKING = 'ADD_BOOKING';
export const RECEIVE_BOOKINGS = 'RECIEVE_BOOKINGS';
export const CLEAR_BOOKINGS = 'CLEAR_BOOKINGS';
export const ADD_TO_BOOKING_INDEX = 'ADD_TO_BOOKING_INDEX';
import { setUserChair } from './chair_actions';

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

const clearBookings = () => ({
  type: CLEAR_BOOKINGS
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
      dispatch(clearBookings());
      dispatch(receiveBookings(res));
      return res;
    }
  )
);

export const fetchChairBookings = id => dispatch => (
  BookingsAPIUtil.fetchChairBookings(id).then(
    res => {
      dispatch(clearBookings());
      dispatch(receiveBookings(res));
      return res;
    }
  )
);

export const updateBooking = booking => dispatch => (
  BookingsAPIUtil.updateBooking(booking).then(
    res => {
      dispatch(setUserChair(res));
      return res;
    }
  )
);
