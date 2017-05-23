import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import ApproveBookings from './approve_bookings';
import AlertContainer from 'react-alert';

import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class RentalForm extends React.Component {
  constructor(props) {
    super(props);

    if(props.currentUser !== null) {
      this.state = {
        startDate: moment(),
        endDate: moment(),
        chairId: props.chair.id,
        userId: props.currentUser.id
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.excludedDates = [];
      this.showAlert = this.showAlert.bind(this);
      if(props.chair.bookings !== undefined) {
        this.excludedDates = this.filterDates(props.chair);
        this.getStartDates = this.getStartDates.bind(this);
      }
      this.updateDates = this.updateDates.bind(this);
    }
  }

  alertOptions() {
    return({
      offset: 14,
      position: 'bottom left',
      theme: 'light',
      time: 3000,
      transition: 'scale'
    });
  }

  showAlert() {
    this.msg.show('Booking successful!', {
      time: 2000,
      type: 'success',
      icon: <i className="fa fa-thumbs-up" aria-hidden="true"></i>
    });
  }

  componentDidMount() {
    if(this.props.chair.bookings !== undefined) {
      this.getStartDates();
    }
  }

  getStartDates() {
    const startDate = this.state.startDate;
    let newStart = false;

    while(newStart === false) {
      newStart = true;
      for(let i = 0; i < this.excludedDates.length; i ++ ) {
        if(startDate.format('YYYY-MM-DD') ===
         this.excludedDates[i].format('YYYY-MM-DD')) {
          newStart = false;
          startDate.add(1, 'days');
          break;
        }
      }
    }
    this.setState({startDate: startDate, endDate: moment(startDate)});
  }

  handleStart(date) {
    this.setState({startDate: date});
    if(this.state.endDate < date) {
      this.setState({endDate: date});
    }
  }

  handleEnd(date) {
    var checkDate = moment(this.state.startDate);
    while (checkDate.format('YYYY-MM-DD') !== date.format('YYYY-MM-DD')) {
      for(let i = 0; i < this.excludedDates.length; i++ ) {
        if(this.excludedDates[i].format('YYYY-MM-DD') ===
         checkDate.format('YYYY-MM-DD')) {
          return;
        }
      }
      checkDate.add(1, 'days');
    }
    this.setState({
      endDate: date
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitBooking(this.state).then(
      res => {
        this.showAlert();
        this.updateDates();
      }
    );
  }

  updateDates() {
    const startDate = this.state.startDate;
    const endDate = this.state.endDate;

    while(startDate.format('YYYY-MM-DD') !== endDate.format('YYYY-MM-DD')) {
      this.excludedDates.push(moment(startDate));
      startDate.add(1, 'days');
    }
    this.excludedDates.push(endDate);

    let start = moment();
    let startFound = false;
    while (startFound === false) {
      startFound = true;
      for (let i = 0; i < this.excludedDates.length; i++ ) {
        if(start.format('YYYY-MM-DD') ===
         this.excludedDates[i].format('YYYY-MM-DD')) {
          startFound = false;
          start.add(1, 'days');
          break;
        }
      }
    }

    this.setState({startDate: start, endDate: moment(start)});
  }


  filterDates(chair) {
    const bookings = chair.bookings;
    const datesToExclude = [];

    for(let i = 0; i < bookings.length; i ++) {
      let startDate = moment(bookings[i].startDate);
      let endDate = moment(bookings[i].endDate);
      while(startDate.format('YYYY-MM-DD') !== endDate.format('YYYY-MM-DD')) {
        datesToExclude.push(moment(startDate));
        startDate = startDate.add(1, 'days');
      }
      datesToExclude.push(endDate);
    }
    return datesToExclude;
  }

  render() {
    const { currentUser, chair } = this.props;

    if(currentUser === null) {
      return (
        <div className='chair-about'>
          <h3>About this chair</h3>
          <p>{chair.about}</p>
          <br />
        </div>
      );
    }

    return(
      <div className='chair-about'>
        <h3>About this chair</h3>
        <p>{chair.about}</p>
        <br />

        { (currentUser.chair === 'null' ||
          currentUser.chair.id !== chair.id) ? (
          <div className='rental-form'>

            <div className='header-holder'>
              <h3>Rent Me!</h3>
              <div className='arrow-right'></div>
            </div>


            <div>
              <div>
                <span>Arrive:</span>
                <DatePicker
                  className='datePicker'
                  minDate={moment()}
                  selected={this.state.startDate}
                  selectsStart
                  excludeDates={this.excludedDates}
                  startDate={this.state.startDate}
                  endDate={this.state.endDate}
                  onChange={this.handleStart.bind(this)}
                  />
              </div>

              <div>
                <span>Depart:</span>
                <DatePicker
                  className='datePicker'
                  selected={this.state.endDate}
                  minDate={this.state.startDate}
                  selectsEnd
                  excludeDates={this.excludedDates}
                  startDate={this.state.startDate}
                  endDate={this.state.endDate}
                  onChange={this.handleEnd.bind(this)}
                  />
              </div>
            </div>

            <div className='header-holder'>
              <a className='button button-white'
                onClick={this.handleSubmit}>Submit</a>
            </div>
          </div>
        ) : (
          <ApproveBookings currentUser={currentUser}
            bookings={chair.bookings} />
        )}
        <AlertContainer
          ref={a => (this.msg = a)} {...this.alertOptions()} />
      </div>
    );
  }
}

export default RentalForm;
