import '@testing-library/jest-dom';
import { screen, render, fireEvent } from '@testing-library/react';

import AuthProvider, { AuthContext } from './AuthContext';
import Login from '../../Components/Login/Login'
import AuthComponent from '../../Components/AuthComponent/AuthComponent';

describe('Auth Integration', () => {

  it('contains initial user and loggedIn values', () => {
    render(
      <AuthProvider>
        <AuthContext.Consumer>
          {
            ({ loggedIn, user }) => (
              <>
                <p data-testid="loggedIn">{loggedIn.toString()}</p>
                <p data-testid="user">{typeof (user)}</p>
              </>
            )
          }
        </AuthContext.Consumer>
      </AuthProvider>
    );

    expect(screen.getByTestId('loggedIn')).toHaveTextContent('false');
    expect(screen.getByTestId('user')).toHaveTextContent('object');
  });

  it('allows for login', () => {
    render(
      <AuthProvider>
        <AuthContext.Consumer>
          {
            ({ loggedIn, user }) => (
              <>
                <Login />
                <p data-testid="loggedIn">{loggedIn.toString()}</p>
                <p data-testid="user">{`${user.capabilities}`}</p>
              </>
            )
          }
        </AuthContext.Consumer>
      </AuthProvider>
    );

    const usernameInput = screen.getByPlaceholderText('Username');
    const passwordInput = screen.getByPlaceholderText('Password');
    const button = screen.getAllByPlaceholderText('Login');

    fireEvent.change(usernameInput, { target: { value: 'admin' } });
    fireEvent.change(passwordInput, { target: { value: 'ADMIN' } });
    fireEvent.click(button);

    expect(screen.getByTestId('loggedIn')).toHaveTextContent('true');
    //copy past results in place of 'create,update,read,delete'
    expect(screen.getByTestId('user')).toHaveTextContent('create,update,read,delete');

    // const logoutButton = screen.getByText('Log Out');
    // fireEvent.click(logoutButton);
  });

  it('renders content with Auth component based on capabilities', () => {
    render(
      < AuthProvider >
        <AuthContext.Consumer>
          {
            ({ loggedIn, user }) => (
              <>
                <Login />
                <AuthComponent capability="read">
                  <p data-testid="test-read">I am authorized to read!</p>
                </AuthComponent>
                <AuthComponent capability="delete">
                  <p data-testid="test-delete">I am authorized to delete!</p>
                </AuthComponent>
                {/* <Auth capability="update">
            <p data-testid="test-update">I am authorized to update!</p>
            </Auth>
            <Auth capability="create">
            <p data-testid="test-create">I am authorized to create!</p>
            </Auth> */}

              </>
            )
          }
        </AuthContext.Consumer>
      </AuthProvider >
    );

    const usernameInput = screen.getByPlaceholderText('Username');
    const passwordInput = screen.getByPlaceholderText('Password');
    const button = screen.getAllByPlaceholderText('Login');

    fireEvent.change(usernameInput, { target: { value: 'user' } });
    fireEvent.change(passwordInput, { target: { value: 'USER' } });
    fireEvent.click(button);

    let authorized = screen.getByTestId('test-read');
    let notAuthorized = screen.queryByTestId('test-delete');

    expect(authorized).toHAveTextContent('I am authorized to read!')
    expect(notAuthorized).not.toBeInTheDocument();

  })

})
