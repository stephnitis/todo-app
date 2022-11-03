import React, { useEffect, useState } from 'react';
import cookie from 'react-cookies';
import jwt_decode from 'jwt-decode';

export const AuthContext = React.createContext();

const testUsers = {
  Admininistrator: {
    password: 'admin',
    name: 'Administrator',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWRtaW5pc3RyYXRvciIsInJvbGUiOiJhZG1pbiIsImNhcGFiaWxpdGllcyI6IlsnY3JlYXRlJywncmVhZCcsJ3VwZGF0ZScsJ2RlbGV0ZSddIiwiaWF0IjoxNTE2MjM5MDIyfQ.pAZXAlTmC8fPELk2xHEaP1mUhR8egg9TH5rCyqZhZkQ'
  },
  Editor: {
    password: 'editor',
    name: 'Editor',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRWRpdG9yIiwicm9sZSI6ImVkaXRvciIsImNhcGFiaWxpdGllcyI6IlsncmVhZCcsJ3VwZGF0ZSddIiwiaWF0IjoxNTE2MjM5MDIyfQ.3aDn3e2pf_J_1rZig8wj9RiT47Ae2Lw-AM-Nw4Tmy_s'
  },
  Writer: {
    password: 'writer',
    name: 'Writer',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiV3JpdGVyIiwicm9sZSI6IndyaXRlciIsImNhcGFiaWxpdGllcyI6IlsnY3JlYXRlJ10iLCJpYXQiOjE1MTYyMzkwMjJ9.dmKh8m18mgQCCJp2xoh73HSOWprdwID32hZsXogLZ68'
  },
  User: {
    password: 'user',
    name: 'User',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVXNlciIsInJvbGUiOiJ1c2VyIiwiY2FwYWJpbGl0aWVzIjoiWydyZWFkJ10iLCJpYXQiOjE1MTYyMzkwMjJ9.WXYvIKLdPz_Mm0XDYSOJo298ftuBqqjTzbRvCpxa9Go'
  },
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