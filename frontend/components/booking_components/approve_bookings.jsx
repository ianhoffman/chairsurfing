import React from 'react';
import ApproveBookingsListItem from './approve_bookings_list_item';
// window.moment = moment;

const ApproveBookings = ({currentUser, approveBooking, denyBooking, bookings}) => {
  return (
    <section className='approve-bookings'>
      <div className='header-holder'>
        <div className='arrow-left'></div>
        <h3>Booking Requests</h3>
      </div>

      { (Object.keys(bookings).length > 0) ? (
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
              Object.keys(bookings).map((key) => (
                <ApproveBookingsListItem
                  key={`booking${key}`}
                  approveBooking={approveBooking}
                  denyBooking={denyBooking}
                  booking={bookings[key]} />
                )
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
