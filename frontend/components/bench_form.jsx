import React from 'react';

class BenchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      seating: '',
      lat: props.lat,
      lng: props.lng
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return function(e) {
      e.preventDefault();
      this.setState({[field]: e.currentTarget.value});
    }.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createBench(this.state).then(
      this.props.history.push('/')
    );
  }

  render() {
    console.log(this.props);
    return(
      <form>
        <h1>Create A Bench!</h1>

        <label>Description
          <input onChange={this.update('description')} value={this.state.description}></input>
        </label>

        <label>Number of Seats
          <input onChange={this.update('seating')} value={this.state.seating}></input>
        </label>

        <label>Latitude
          <input onChange={this.update('lat')} value={this.state.lat} disabled></input>
        </label>

        <label>Longitude
          <input onChange={this.update('lng')} value={this.state.lng} disabled></input>
        </label>

        <button onClick={this.handleSubmit}>Create Bench</button>
      </form>
    );
  }
}

export default BenchForm;
