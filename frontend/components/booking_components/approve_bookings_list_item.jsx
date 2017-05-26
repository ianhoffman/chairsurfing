import React from 'react';
import moment from 'moment';

const ApproveBookingsListItem = ({booking, approveBooking, denyBooking}) => {
  const startDate = moment(booking.startDate).format('DD/MM/YY');
  const endDate = moment(booking.endDate).format('DD/MM/YY');
  const checkDate = moment(booking.startDate);
  const now = moment();

  if(checkDate > now ||
    checkDate.format('YYYY-MM-DD') ===
    now.format('YYYY-MM-DD') ) {
      return(
        <tr>
          <td>
            {`${booking.user.firstName} ${booking.user.lastName}`}
          </td>
          <td>
            {`${startDate} - ${endDate}`}
          </td>
          {
            booking.status === 'PENDING' ? (
              <td>
                <a onClick={() => approveBooking({
                    id: booking.id,
                    status: 'APPROVED'
                  })}>APPROVE</a>
                <a onClick={() => denyBooking({
                    id: booking.id,
                    status: 'DENIED'
                  })}>DENY</a>
              </td>
            ) : (
              <td>
                {booking.status}
              </td>
            )
          }
      </tr>
    );
  }
};

export default ApproveBookingsListItem;
