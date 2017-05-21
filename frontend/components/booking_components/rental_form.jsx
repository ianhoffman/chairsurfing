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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field) {
    return date => this.setState({[field]: date});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitBooking(this.state);
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
            <h3>Rent me!</h3>

            <div>
              <div>
                <span>Arrive:</span>
                <DatePicker
                  className='datePicker'
                  minDate={moment()}
                  selected={this.state.startDate}
                  selectsStart
                  startDate={this.state.startDate}
                  endDate={this.state.endDate}
                  onChange={this.handleChange('startDate').bind(this)}
                  />
              </div>

              <div>
                <span>Depart:</span>
                <DatePicker
                  className='datePicker'
                  selected={this.state.endDate}
                  selectsEnd
                  startDate={this.state.startDate}
                  endDate={this.state.endDate}
                  onChange={this.handleChange('endDate').bind(this)}
                  />
              </div>
            </div>

            <button onClick={this.handleSubmit}>Submit Request</button>

          </div>
        ) : (
          <CreateEditButton currentUser={currentUser} />
        )}
      </div>
    );
  }
}

export default RentalForm;
