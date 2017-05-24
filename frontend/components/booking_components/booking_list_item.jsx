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
      <p>
        {`${moment(booking.startDate).format('DD/MM/YY')} - ${moment(booking.endDate).format('DD/MM/YY')}`}
      </p>
      {(moment(booking.startDate) < moment() &&
         moment(booking.startDate).format('YYYY-MM-DD') !==
          moment().format('YYYY-MM-DD')) ?
           'ELAPSED' : booking.status}
    </li>
  );
};

export default BookingListItem;
