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

    this.clickable = true;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.switchView = this.switchView.bind(this);
  }

  componentDidMount() {
    if(this.props.demo) {
      $('input').prop('disabled', true);
      this.clickable = false;
      const email = "Jane@Doe.com";
      const password = "password";
      let i = 0;
      let j = 0;

      const fillIn = setInterval(() => {
        if(i < 12) {
          this.setState({email: this.state.email += email[i]});
          i += 1;
        } else {
          this.setState({password: this.state.password += password[j]});
          j += 1;
          if(j === 8) {
            clearInterval(fillIn);
            this.demoLogin();
          }
        }
      }, 100);

    }
  }

  demoLogin() {
    const user = Object.assign({}, this.state);
    $('.formBody > a').addClass('demoShake');

    setTimeout(() => {
      this.props.processForm(this.props.logIn, user).then(
        res => {
          this.props.history.push('/profile');
        }
      );
    }, 700);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    if (this.clickable) {
      this.props.processForm(this.props.logIn, user).then(
        res => (this.props.history.push('/profile'))
      );
    }
  }

  handleUpdate(field) {
    return e => {
      e.preventDefault();
      this.setState({[field]: e.target.value});
    };
  }

  switchView() {
    if(this.clickable) {
      this.props.closeModal();
      this.props.history.push(this.props.logIn ? '/signup' : '/login');
      this.props.toggleState();
      this.props.openModal();
    }
  }

  render() {
    const { errors, logIn, loggedIn } = this.props;

    return(
      <form className='baseForm'>
        {loggedIn ? <Redirect to="/profile"/> : ""}
        {logIn ? (
          <div className='formHeader'>
            <h2>Log in to Chairsurfing</h2>
            <p onClick={() => {
              this.props.closeModal();
              this.props.history.goBack();
            }}>X</p>
          </div>
        ) : (
          <div className='formHeader'>
            <h2>Join Chairsurfing for free</h2>
            <p onClick={() => {
              this.props.closeModal();
              this.props.history.goBack();
            }}>X</p>
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

          <a
            className='button button-blue'
            onClick={this.handleSubmit}>{
              logIn ? (
                'Log in'
              ) : (
                'Join'
              )
            }</a>

          {logIn ? (
            <div className='switchLogin'>
              <span>Don't have an account?</span>
              <a className='button button-white' onClick={this.switchView}>Join</a>
            </div>
          ) : (
            <div className='switchLogin'>
              <span>Already a member?</span>
              <a className='button button-white' onClick={this.switchView}>Log In</a>
            </div>
          )}
        </div>

      </form>
    );

  }

}

export default withRouter(SessionForm);
