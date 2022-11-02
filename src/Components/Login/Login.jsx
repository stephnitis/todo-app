import React from 'react';
import {When} from 'react-if';

import { LoginContext } from '../../Context/AuthContext/AuthContext';

class Login extends React.Component {
  static contextType = LoginContext;

  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.context.login(this.state.username, this.state.password);
  };

  render() {
    return (
      <>
        <When condition={this.context.loggedIn}>
          <button onClick={this.context.logout}>Log Out</button>
        </When>

        <When condition={!this.context.loggedIn}>
          <form onSubmit={this.handleSubmit}>
            <input
              placeholder="UserName"
              name="username"
              onChange={this.handleChange}
            />
            <input
              placeholder="password"
              name="password"
              onChange={this.handleChange}
            />
            <button>Login</button>
          </form>
        </When>
      </>
    );
  }
}

export default Login;

// Implement a <Login /> Component that has the following features:
// Provide an account login screen with a form.
// Accepts Username and Password
// On successful login, store the token as a cookie
// If a user returns and has a valid login cookie, hide the login form and consider them “Logged In”
// Display a logout button instead of a form if they are “Logged In”.