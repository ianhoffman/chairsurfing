import React from 'react';
import BookingListItem from './booking_list_item';

class BookingIndex extends React.Component {
  componentDidMount() {
    this.props.fetchUserBookings(this.props.currentUser);
  }

  render() {
    const { bookings } = this.props;
    const bookingList = [];

    for(let i = 1; i <= Object.keys(bookings).length; i++ ) {
      bookingList.push(
        <BookingListItem
          key={`booking${i}`}
          booking={bookings[i]} />
      );
    }


    if (bookingList.length > 0) {
      return (
        <section className='bookings-index'>
          <h2>Your bookings</h2>
          <ul className='bookings-list'>
            { bookingList }
          </ul>
        </section>
      );
    } else if (this.props.fetchInProgress) {
      return(
        <section className='bookings-index'>
          <h1>Fetching bookings...</h1>
        </section>
      );
    } else {
      return(
        <section className='bookings-index'>
          <h1>You have no bookings.</h1>
          <h1>Make some!</h1>
        </section>
      );
    }

  }

}

export default BookingIndex;
