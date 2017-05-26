import React from 'react';
import BookingListItem from './booking_list_item';

class BookingIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchInProgress: true
    };
  }

  componentDidMount() {
    this.props.fetchUserBookings(this.props.currentUser).then(
      res => {
        this.state.fetchInProgress = false;
      }
    );
  }

  componentWillUnmount() {
    // debugger
  }

  render() {
    const { bookings } = this.props;


    if (Object.keys(bookings).length > 0) {
      return (
        <section className='bookings-index'>
          <h2>Your Bookings</h2>
          <ul className='bookings-list'>
            { Object.keys(bookings).map(key => (
              <BookingListItem
                key={`booking${key}`}
                booking={bookings[key]} />
            )) }
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
          <h1 className='no-bookings'>You have no bookings...</h1>
          <h1>Make some!</h1>
        </section>
      );
    }

  }

}

export default BookingIndex;
