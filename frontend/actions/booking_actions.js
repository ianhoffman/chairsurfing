export const RECEIVE_BOOKING = 'RECEIVE_BOOKING';
export const RECEIVE_BOOKINGS = 'RECIEVE_BOOKINGS';
export const CLEAR_BOOKINGS = 'CLEAR_BOOKINGS';
import { setUserChair } from './chair_actions';

import * as BookingsAPIUtil from '../util/bookings_api_util';

const receiveBooking = booking => ({
  type: RECEIVE_BOOKING,
  booking
});

const receiveBookings = bookings => ({
  type: RECEIVE_BOOKINGS,
  bookings
});

const clearBookings = () => ({
  type: CLEAR_BOOKINGS
});

export const submitBooking = booking => dispatch => (
  BookingsAPIUtil.submitBooking(booking).then(
    res => {
      dispatch(receiveBooking(res));
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

export const approveBooking = booking => dispatch => (
  BookingsAPIUtil.updateBooking(booking).then(
    res => {
      dispatch(clearBookings());
      dispatch(receiveBookings(res));
      return res;
    }
  )
);

export const denyBooking = booking => dispatch => (
  BookingsAPIUtil.updateBooking(booking).then(
    res => {
      dispatch(receiveBooking(res));
      return res;
    }
  )
);
