import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import CreateEditButton from '../chair_components/create_edit_button';

import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class RentalForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment(),
      endDate: moment(),
      chairId: props.chair.id,
      userId: props.currentUser.id
    };
    this.excludedDates = this.filterDates();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleStart(date) {
    this.setState({start: date});
  }

  handleEnd(date) {
    var checkDate = moment(this.state.startDate);
    while (checkDate.format('YYYY-MM-DD') !== date.format('YYYY-MM-DD')) {
      for(let i = 0; i < this.excludedDates.length; i++ ) {
        if(this.excludedDates[i].format('YYYY-MM-DD') === checkDate.format('YYYY-MM-DD')) {
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
    this.props.submitBooking(this.state);
  }

  filterDates() {
    const { chair } = this.props;
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

    return(
      <div className='chair-about'>
        <h3>About this chair</h3>
        <p>{chair.about}</p>
        <br />

        { (currentUser.chair === 'null' || currentUser.chair.id !== chair.id) ? (
          <div className='rental-form'>

            <div className='header-holder'>
              <h3>Rent me!</h3>
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
                  minDate={moment(this.state.startDate).add(1, 'days')}
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
          <CreateEditButton currentUser={currentUser} />
        )}
      </div>
    );
  }
}

export default RentalForm;
