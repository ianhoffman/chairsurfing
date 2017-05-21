import React from 'react';

class BookingIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUserBookings(this.props.currentUser);
  }

  render() {
    const { bookings } = this.props;

    const bookingsList = Object.keys(bookings).forEach(key => {
      <li
        key={`booking${key}`}>
        Arrive: {bookings[key].startDate}
        Depart: {bookings[key].endDate}
        Chair: {bookings[key].chair.description}
        Address: {bookings[key].chair.address}
      </li>;
    });

    return(
      <ul>
        { bookingsList }
      </ul>
    );
  }
}

export default BookingIndex;
