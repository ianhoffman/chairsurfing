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

    if(this.props.logIn) {
      this.state.email = "Jane@Doe.com";
      this.state.password = "password";
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.switchView = this.switchView.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(this.props.logIn, user).then(
      res => (this.props.history.push('/profile'))
    );
  }

  handleUpdate(field) {
    return e => {
      e.preventDefault();
      this.setState({[field]: e.target.value});
    };
  }

  switchView() {
    this.props.closeModal();
    this.props.history.push(this.props.logIn ? '/signup' : '/login');
    this.props.toggleState();
    this.props.openModal();
  }

  render() {
    const { errors, logIn, loggedIn } = this.props;
    return(
      <form className='sessionForm'>
        {loggedIn ? <Redirect to="/profile"/> : ""}
        {logIn ? (
          <div className='formHeader'>
            <h2>Log in to Chairsurfing</h2>
            <p onClick={this.props.closeModal}>X</p>
          </div>
        ) : (
          <div className='formHeader'>
            <h2>Join Chairsurfing for free</h2>
            <p onClick={this.props.closeModal}>X</p>
          </div>
        ) }

        { errors.length > 0 ? (
            <ul className='errorList'>
              {errors.map((err, i) => (
                <li
                  className='errorMessage'
                  key={`err` + i}>{err}</li>
              ))}
            </ul>
          ) : ''
        }
        <div className='formBody'>

          { !logIn ? (
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
            ) : ""
          }

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

          <a className='submit button' onClick={this.handleSubmit}>{
              logIn ? (
                'Log in'
              ) : (
                'Join'
              )
            }</a>

          {logIn ? (
            <div className='switchLogin'>
              <span>Don't have an account?</span>
              <a className='button' onClick={this.switchView}>Join</a>
            </div>
          ) : (
            <div className='switchLogin'>
              <span>Already a member?</span>
              <a className='button' onClick={this.switchView}>Log In</a>
            </div>
          )}
        </div>

      </form>
    );

  }

}

export default withRouter(SessionForm);
