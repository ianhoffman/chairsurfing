export const submitBooking = booking => (
  $.ajax({
    url: '/api/bookings',
    method: 'POST',
    data: {
      booking: {
        start_date: booking.startDate.format('YYYY-MM-DD'),
        end_date: booking.endDate.format('YYYY-MM-DD'),
        chair_id: booking.chairId,
        user_id: booking.userId
      }
    },
    error: err => console.log(err)
  })
);

export const fetchUserBookings = user => (
  $.ajax({
    url: '/api/bookings',
    method: 'GET',
    data: {
      user_id: user.id
    },
    error: err => console.log(err)
  })
);
