import React from 'react';
import moment from 'moment';
// window.moment = moment;

const ApproveBookings = ({currentUser, updateBooking}) => {
  const bookings = [];
  const now = moment();

  currentUser.chair.bookings.forEach(booking => {
    if(moment(booking.startDate) > now || moment(booking.startDate).format('YYYY-MM-DD')
    === now.format('YYYY-MM-DD')) {
      bookings.push(booking);
    }
  });

  if(bookings.length === 0) {
    return (<div></div>);
  }

  return (
    <section className='approve-bookings'>
      <div className='header-holder'>
        <div className='arrow-left'></div>
        <h3>Booking Requests</h3>
      </div>

      { (bookings.length > 0) ? (
        <table>
          <thead>
            <tr>
              <th>
                Name
              </th>
              <th>
                Dates
              </th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {
              bookings.map((booking, idx) => {
                let startDate = moment(booking.startDate).format('DD/MM/YY');
                let endDate = moment(booking.endDate).format('DD/MM/YY');
                let checkDate = moment(booking.startDate);

                if(checkDate > now ||
                  checkDate.format('YYYY-MM-DD') ===
                  now.format('YYYY-MM-DD') ) {
                    return(
                      <tr key={`booking${idx}`}>
                        <td>
                          {`${booking.firstName} ${booking.lastName}`}
                        </td>
                        <td>
                          {`${startDate} - ${endDate}`}
                        </td>
                        {
                          booking.status === 'PENDING' ? (
                            <td>
                              <a onClick={() => updateBooking({
                                  id: booking.id,
                                  status: 'APPROVED'
                                })}>APPROVE</a>
                              <a onClick={() => updateBooking({
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
                }
              )
            }
          </tbody>
        </table>
        ) : (
          <div className='no-bookings'>
            <p>No pending bookings!</p>
          </div>
      ) }

    </section>
  );
};

export default ApproveBookings;
