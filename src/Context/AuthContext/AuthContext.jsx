import React, { useEffect, useState } from 'react';
import cookie from 'react-cookies';
import jwt_decode from 'jwt-decode';

export const AuthContext = React.createContext();

const testUsers = {
  admin: {
    username: 'admin',
    password: 'ADMIN',
    email: 'admin@fakeuser.com',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZTBlZDFiMzNjZTQ5MDAxODlmMzhiNyIsImNhcGFiaWxpdGllcyI6WyJjcmVhdGUiLCJ1cGRhdGUiLCJyZWFkIiwiZGVsZXRlIl0sInR5cGUiOiJ1c2VyIiwiaWF0IjoxNjU4OTA3OTMxLCJleHAiOjE2NTg5MTE1MzF9.bqe-52if5K50rGn30P4fheuAa2qWuxse9tWiuH4cnUM',
  },
  editor: {
    username: 'editor',
    password: 'EDITOR',
    email: 'editor@fakeuser.com',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZTBlZjk5MzNjZTQ5MDAxODlmMzhiYSIsImNhcGFiaWxpdGllcyI6WyJjcmVhdGUiLCJ1cGRhdGUiLCJyZWFkIl0sInR5cGUiOiJ1c2VyIiwiaWF0IjoxNjU4OTA4NTY5LCJleHAiOjE2NTg5MTIxNjl9.073ppQCHbplYN9befn8JElcP4zgFX6TEe_ARUQZc0KU',
  },
  user: {
    username: 'user',
    password: 'USER',
    email: 'user@fakeuser.com',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZTBmMGZjMzNjZTQ5MDAxODlmMzhjMCIsImNhcGFiaWxpdGllcyI6WyJyZWFkIl0sInR5cGUiOiJ1c2VyIiwiaWF0IjoxNjU4OTA4OTI0LCJleHAiOjE2NTg5MTI1MjR9.t7c7k2LbaTxsdfYjx_WC3QiP4MycU8sZryVyXQqJQH',
  }  
};

const AuthProvider = ({children}) => {

  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);

  const can = (capability) => {
    return user?.capabilities?.includes(capability);
  }

// Define a function that can simulate a login event.
// Parameters: username and password as strings.
// Sets a User on the auth context, and changes login status to true.

  const login = async (username, password) => {
    // let { loggedIn, token, user } = this.state;
    let auth = testUsers[username];

    if (auth && auth.password === password) {
      try {
        _validateToken(auth.token);
      } catch (e) {
        // setLoggedIn(loggedIn, token, user, e);
        console.error(e);
      }
    }
  }

// Define a function that can simulate a logout event.
// Resets the User object and changes login status to `false.

 const logout = () => {
    setUser({});
    setLoggedIn(false, null, {});
    setError(null);
  };

  const _validateToken = token => {
    try {
      let validUser = jwt_decode(token);
      setLoggedIn(true, token, validUser);
      if(validUser){
        setUser(validUser);
        setLoggedIn(true);
        console.log('User Logged In')
        cookie.save('auth', token);
      }
    }
    catch (e) {
      setLoggedIn(false, null, {}, e);
      console.log('Token Validation Error', e);
    }

  };

// Define a function that can authorize a User based on a capabilty.
// Parameters: a capability as a string.
// Returns a boolean whether the user has the capabililty parameter.



useEffect(() => {
  // const qs = new URLSearchParams(window.location.search);
  const token = cookie.load('auth');
  // const token = qs.get('token') || cookieToken || null;
  if(token){
    _validateToken(token);
  }
}, []); 
  

  let values = {
    can,
    login,
    logout,
    error,
    loggedIn,
    user
  };

    return (
      <AuthContext.Provider value={values}>
        {children}
      </AuthContext.Provider>
    );
  
}

export default AuthProvider;