import React from 'react';
import {Link, Redirect, withRouter} from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(this.props.logIn, user);
  }

  handleUpdate(field) {
    return e => {
      e.preventDefault();
      this.setState({[field]: e.target.value});
    };
  }

  render() {
    const { errors, logIn, loggedIn } = this.props;
    return(
      <form className='sessionForm'>
        {loggedIn ? <Redirect to="/"/> : ""}
        {logIn ? (
          <div>
            <h2>Log in to ChairSurfing</h2>
          </div>
        ) : (
          <div>
            <h2>Join ChairSurfing</h2>
          </div>
        ) }

        { errors.length > 0 ?
          errors.map((err, i) => (
            <li key={`err` + i}>{err}</li>
          )) : ''
        }
        <label>
          Username:
          <input type="text" onChange={this.handleUpdate("username")} value={this.state.username} />
        </label>

        <label>
          Password:
          <input type="password" onChange={this.handleUpdate("password")} value={this.state.password} />
        </label>

        <button onClick={this.handleSubmit}>{
            logIn ? (
              'Log in'
            ) : (
              'Join'
            )
          }</button>

      </form>
    );

  }

}

export default withRouter(SessionForm);
