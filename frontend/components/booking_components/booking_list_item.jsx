import React from 'react';
import moment from 'moment';

const BookingListItem = ({booking}) => {
  const startDate = moment(booking.startDate).format('MM/DD/YY');
  const endDate = moment(booking.endDate).format('MM/DD/YY');

  return (
    <li>
      <a href={`/#/chairs/${booking.chair.id}/description`}>
        {booking.chair.description}
      </a>
      <a href={`/#/chairs/${booking.chair.id}/location`}>
        {booking.chair.address}
      </a>
      PENDING
    </li>
  );
};

export default BookingListItem;
