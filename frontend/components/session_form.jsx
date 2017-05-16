import React from 'react';
import {Link, Redirect, withRouter} from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
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
          <div className='formHeader'>
            <h2>log in to chairsurfing</h2>
          </div>
        ) : (
          <div className='formHeader'>
            <h2>Join Chairsurfing for free</h2>
          </div>
        ) }

        { errors.length > 0 ?
          errors.map((err, i) => (
            <li key={`err` + i}>{err}</li>
          )) : ''
        }
        <div className='formBody'>

          <div className='firstAndLast'>
            <input
              type="text"
              onChange={this.handleUpdate("firstName")}
              value={this.state.firstName}
              placeholder="First name" />

            <input
              type="text"
              onChange={this.handleUpdate("lastName")}
              value={this.state.lastName}
              placeholder="Last name" />
          </div>

          <input
            type="text"
            onChange={this.handleUpdate("email")}
            value={this.state.email}
            placeholder="Email" />


          <input
            type="password"
            onChange={this.handleUpdate("password")}
            value={this.state.password}
            placeholder="Password" />

          <a className='submit' onClick={this.handleSubmit}>{
              logIn ? (
                'Log in'
              ) : (
                'Join'
              )
            }</a>

          {logIn ? (
            <div className='switchLogin'>
              <span>Don't have an account?</span>
              <a>Join</a>
            </div>
          ) : (
            <div className='switchLogin'>
              <span>Already a member?</span>
              <a>Log In</a>
            </div>
          )}
        </div>

      </form>
    );

  }

}

export default withRouter(SessionForm);
