import React from 'react';
import moment from 'moment';

const BookingListItem = ({booking}) => {
  const startDate = moment(booking.startDate).format('MM/DD/YY');
  const endDate = moment(booking.endDate).format('MM/DD/YY');

  return (
    <li>
      <a href={`/#/chairs/${booking.chairId}/description`}>
        {booking.chairDescription}
      </a>
      <a href={`/#/chairs/${booking.chairId}/location`}>
        {booking.chairAddress}
      </a>
      PENDING
    </li>
  );
};

export default BookingListItem;
