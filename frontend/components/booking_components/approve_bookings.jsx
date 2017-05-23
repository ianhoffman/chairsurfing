import React from 'react';
import CreateEditButton from '../chair_components/create_edit_button';

const ApproveBookings = ({bookings, currentUser}) => {
  if(Object.keys(bookings).length === 0) {
    return (<div></div>);
  }

  return (
    <section className='approve-bookings'>
      <ul>
        {
          Object.keys(bookings).map(key => (
            <li key={`booking${key}`}>
              {`${bookings[key].userFirstName} ${bookings[key].userLastName}`}
              {bookings[key].startDate}
              {bookings[key].endDate}
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
