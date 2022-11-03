import {useContext, useState } from 'react';
import {When} from 'react-if';

import { AuthContext } from '../../Context/AuthContext/AuthContext';
import useFormHook from '../../hooks/form.js';
import { Text, Button, TextInput } from '@mantine/core';

const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const {
    loggedIn,
    // user,
    // error,
    // can,
    login,
    logout
  } = useContext(AuthContext);
  
  const { handleSubmit } = useFormHook(login, username, password);

  // const handleChange = e => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   login(username, password);
  // };

// On successful login, store the token as a cookie
// If a user returns and has a valid login cookie, hide the login form and consider them “Logged In”

    return (
      <>
      {/* // Display a logout button instead of a form if they are “Logged In”. */}
        <When condition={loggedIn}>
          <Button onClick={logout}>Log Out</Button>
        </When>

        {/* // Provide an account login screen with a form.
        // Accepts Username and Password */}
        <When condition={!loggedIn}>
          <form onSubmit={handleSubmit}>
            <TextInput
              placeholder="Username"
              name="username"
              onChange={(e) => setUsername(e.target.value)} 
            />
            <TextInput
              placeholder="Password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button onSubmit={() => login(username, password)} type="submit">Login</Button>
            {/* <Button 
            type="submit">
              Login
            </Button> */}

            <div>user: {JSON.stringify(username)}</div>
          </form>
        </When>
      </>
    )

}
  


export default Login;
