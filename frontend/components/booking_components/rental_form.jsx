import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class RentalForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment(),
      endDate: moment()
    };
  }

  handleChange(field) {
    return date => this.setState({[field]: date});
  }

  render() {
    const { chair } = this.props;

    return(
      <div className='chair-about'>
        <h3>About this chair</h3>
        <p>{chair.about}</p>
        <br />
        <div className='rental-form'>
          <h3>Rent me!</h3>

          <div>
            <div>
              <span>Arrive:</span>
              <DatePicker
                className='datePicker'
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

        </div>
      </div>
    );
  }
}

export default RentalForm;
