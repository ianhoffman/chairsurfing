import React from 'react';
import BookingListItem from './booking_list_item';

class BookingIndex extends React.Component {
  constructor(props) {
    super(props);
    this.fetchInProgress = true;
  }

  componentDidMount() {
    this.props.fetchUserBookings(this.props.currentUser).then(
      res => {
        this.fetchInProgress = false;
        debugger
      }
    );
  }

  render() {
    const { bookings } = this.props;
    const bookingList = [];
    debugger

    // for(let i = 1; i <= Object.keys(bookings).length; i + 2 ) {
    //
    //   if (bookings[i + 1] !== undefined ) {
    //     bookingList.push(
    //       <div>
    //         <BookingListItem
    //           key={`booking${i}`}
    //           booking={bookings[i]} />
    //         <BookingListItem
    //           key={`booking${i + 1}`}
    //           booking={bookings[i + 1]} />
    //       </div>
    //     );
    //   } else {
    //     bookingList.push(
    //       <div>
    //         <BookingListItem
    //           key={`booking${i}`}
    //           booking={bookings[i]} />
    //       </div>
    //     );
    //   }
    // }
    debugger

    if (bookingList.length > 0) {
      return (
        <section className='bookings-index'>
          <h2>Your bookings</h2>
          <ul className='bookings-list'>
            { bookingList }
          </ul>
          <h1 className='banner'>Discover more great seats</h1>
        </section>
      );
    } else if (this.fetchInProgress) {
      return(
        <section className='bookings-index'>
          <h1>Fetching bookings...</h1>
        </section>
      );
    } else {
      return(
        <section className='bookings-index'>
          <h1>Looks like you have no bookings...</h1>
        </section>
      );
    }

  }

}

export default BookingIndex;
