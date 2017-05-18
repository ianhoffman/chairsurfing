import React from 'react';

class ChairForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
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
    this.props.createChair(this.state).then(
      this.props.history.push('/')
    );
  }

  render() {
    return(
      <form>
        <h1>Create A Chair!</h1>

        <label>Description
          <input onChange={this.update('description')} value={this.state.description}></input>
        </label>

        <label>Latitude
          <input onChange={this.update('lat')} value={this.state.lat} disabled></input>
        </label>

        <label>Longitude
          <input onChange={this.update('lng')} value={this.state.lng} disabled></input>
        </label>

        <button onClick={this.handleSubmit}>Create Chair</button>
      </form>
    );
  }
}

export default ChairForm;
