import React from 'react';
import {When} from 'react-if';

import { LoginContext } from '../../Context/AuthContext/AuthContext';

class Login extends React.Component {

  static contextType = LoginContext;

  render() {

    const isLoggedIn = this.context.loggedIn;
    const canDo = this.props.capability ? this.context.can(this.props.capability) : true;
    const okToRender = isLoggedIn && canDo;

    return (
      <When condition={okToRender}>
        {this.props.children}
      </When>
    );
  }
}

export default Login;


// Create an <Auth /> component with the following features:
// Given a capability prop of type string, conditionally render components based on the user stored in context.
// Hide the entire interface until the user has logged in.
// Implements the following RBAC rules:
// Logged In Users with ‘update’ permissions can click the records to mark them as complete.
// Logged In Users with ‘create’ permissions can create new items.
// Logged In Users with ‘delete’ permissions can delete items.
// Logged In Users with ‘read’ permissions can see the list of To Do Items.