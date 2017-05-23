import React from 'react';
import CreateEditButton from '../chair_components/create_edit_button';

const ApproveBookings = ({bookings, currentUser}) => {

  if(bookings.length === 0) {
    return (<div></div>);
  }

  return (
    <section className='approve-bookings'>
      <ul>
        {
          bookings.map((booking, idx) => (
            <li key={`booking${idx}`}>
              {`${booking.userFirstName} ${booking.userLastName}`}
              {booking.startDate}
              {booking.endDate}
            </li>
          ))
        }
      </ul>
      <CreateEditButton
        currentUser={currentUser} />
    </section>
  );
};

export default ApproveBookings;
