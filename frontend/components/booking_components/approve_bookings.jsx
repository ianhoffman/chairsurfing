import React from 'react';
import CreateEditButton from '../chair_components/create_edit_button';
import moment from 'moment';

const ApproveBookings = ({currentUser}) => {
  const bookings = currentUser.chair.bookings;

  if(bookings.length === 0) {
    return (<div></div>);
  }

  const now = moment();

  return (
    <section className='approve-bookings'>
      <div className='header-holder'>
        <div className='arrow-left'></div>
        <h3>Booking Requests</h3>
      </div>

      { (bookings.lenght > 0) ? (
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
                          {`${booking.userFirstName} ${booking.userLastName}`}
                        </td>
                        <td>
                          {`${startDate} - ${endDate}`}
                        </td>
                        <td>
                          <a>APPROVE</a>
                          <a>DENY</a>
                        </td>
                      </tr>
                    );
                  }
                }
              )
            }
          </tbody>
        </table>
        ) : (
          <div></div>

      ) }

    </section>
  );
};

export default ApproveBookings;
