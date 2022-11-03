import { useContext, useState } from 'react';
// import { When } from 'react-if';
import { If, Then, Else } from 'react-if';

import { AuthContext } from '../../Context/AuthContext/AuthContext';
import { Button, Group, TextInput } from '@mantine/core';

const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {
    loggedIn,
    login,
    logout
  } = useContext(AuthContext);

  const handleLogout = () => {
    setUsername('');
    setPassword('');
    logout();
  }

  return (
    <>

      <If condition={loggedIn}>
        <Then>
          <Button color="red" onClick={handleLogout}>Log Out</Button>
        </Then>
        <Else>
          <Group>
            <Then>
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
            <Button color="gray.8" onClick={() => login(username, password)} type="submit">Login</Button>
            {/* <div>user: {JSON.stringify(username)}</div> */}
            </Then>
          </Group>
        </Else>
      </If>
    </>
  )

}



export default Login;
