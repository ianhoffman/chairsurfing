import React from 'react';
import BookingIndexContainer from './booking_components/booking_index_container';
import SearchContainer from './search_components/search_container';

const UserProfile = () => (
  <section className='user-cp'>
    <BookingIndexContainer />
    <div>
      <h2>Top Seats Near You</h2>
      <SearchContainer />
    </div>
  </section>
);

export default UserProfile;
