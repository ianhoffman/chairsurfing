import React from 'react';

class FilterForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      minSeating: '',
      maxSeating: ''
    };
    this.update = this.update.bind(this);
  }

  update(field) {
    return e => {
      this.setState({[field]: e.currentTarget.value});
      this.props.updateFilter(field, e.currentTarget.value);
    };
  }

  render() {
    return(
      <form>
        <label>Min seating
          <input onChange={this.update('minSeating')} value={this.state.minSeating} />
        </label>
        <label>Max seating
          <input onChange={this.update('maxSeating')} value={this.state.maxSeating} />
        </label>
      </form>
    );
  }

}

export default FilterForm;
