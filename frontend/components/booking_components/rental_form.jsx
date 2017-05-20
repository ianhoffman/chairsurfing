import React from 'react';

const RentalForm = ({ chair }) => {
  return (
    <div className='chair-about'>
      <h3>About this chair</h3>
      <p>{chair.about}</p>
      <br />
      <span>{chair.accepting_guests ? 'Available to rent!' : 'The owner is currently not accepting guests.'}</span>
    </div>
  );
};

export default RentalForm;
