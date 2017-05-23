import React from 'react';
import BookingListItem from './booking_list_item';

class BookingIndex extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   fetchInProgress: true
    // };
  }

  // componentDidMount() {
  //   this.props.fetchUserBookings(this.props.currentUser).then(
  //     res => {
  //       this.state.fetchInProgress = false;
  //     }
  //   );
  // }

  componentWillUnmount() {
    // debugger
  }

  render() {
    const { bookings } = this.props;
    const bookingList = [];

    for(let i = 0; i < bookings.length; i++ ) {
      bookingList.push(
        <BookingListItem
          key={`booking${i}`}
          booking={bookings[i]} />
      );
    }

    if (bookingList.length > 0) {
      return (
        <section className='bookings-index'>
          <h2>Your Bookings</h2>
          <ul className='bookings-list'>
            { bookingList }
          </ul>
        </section>
      );
    // } else if (this.fetchInProgress) {
    //   return(
    //     <section className='bookings-index'>
    //       <h1>Fetching bookings...</h1>
    //     </section>
    //   );
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
