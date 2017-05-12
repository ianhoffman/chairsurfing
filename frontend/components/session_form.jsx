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
    this.props.processForm(this.props.formType, user);
  }

  handleUpdate(field) {
    return e => {
      e.preventDefault();
      this.setState({[field]: e.target.value});
    };
  }

  render() {
    const { errors, formType, loggedIn } = this.props;
    return(
      <form>
        {loggedIn ? <Redirect to="/"/> : ""}
        {formType === '/login' ? (
          <div>
            <h2>Log in</h2>
            <Link to='/signup'/>
          </div>
        ) : (
          <div>
            <h2>Sign up</h2>
            <Link to='/login'/>
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
            formType === '/login' ? (
              'Log in'
            ) : (
              'Sign up'
            )
          }</button>

      </form>
    );

  }

}

export default withRouter(SessionForm);
