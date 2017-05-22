import React from 'react';
import moment from 'moment';

const BookingListItem = ({booking}) => {
  const startDate = moment(booking.startDate).format('MM/DD/YY');
  const endDate = moment(booking.endDate).format('MM/DD/YY');

  return (
    <li
      className='bookings-item' >
      <div>
        {startDate} - {endDate}
      </div>
      <div>
        Chair: {booking.chair.description}
      </div>
      <div>
        Address: {booking.chair.address}
      </div>
      <div>
        Status: PENDING
      </div>
    </li>
  );
};

export default BookingListItem;
