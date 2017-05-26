import React from 'react';
import BookingListItem from './booking_list_item';

class BookingIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchInProgress: true,
      startBooking: 0
    };
    this.nextBookings = this.nextBookings.bind(this);
    this.prevBookings = this.prevBookings.bind(this);
  }

  nextBookings(e) {
    e.preventDefault();
    this.setState({
      startBooking: this.state.startBooking + 3
    });
  }

  prevBookings(e) {
    e.preventDefault();
    this.setState({
      startBooking: this.state.startBooking - 3
    });
  }

  componentDidMount() {
    this.props.fetchUserBookings(this.props.currentUser).then(
      res => {
        this.state.fetchInProgress = false;
      }
    );
  }


  render() {
    const { bookings } = this.props;
    const allBookings = [];
    const currBookings = [];

    Object.keys(bookings).forEach(key => {
      allBookings.push(bookings[key]);
    });

    for (let i = this.state.startBooking;
      i < allBookings.length && i < this.state.startBooking + 3;
      i++ ) {
        currBookings.push(allBookings[i]);
    }

    if (currBookings.length > 0) {
      return (
        <section className='bookings-index'>
          <h2>Your Bookings</h2>
          <ul className='bookings-list'>
            { currBookings.map((booking, idx) => (
              <BookingListItem
                key={`booking${idx}`}
                booking={booking} />
            )) }
          </ul>
          <div className='togglePages'>
            { (this.state.startBooking - 3) < 0 ? (
                ''
            ) : (
              <a
                onClick={this.prevBookings}
                className='button button-white'>Previous Page</a>
              )
            }

            { (this.state.startBooking + 3) >= allBookings.length ? (
              ''
            ) : (
              <a
                onClick={this.nextBookings}
                className='button button-blue'>Next Page</a>
            )
          }
          </div>
        </section>
      );

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
