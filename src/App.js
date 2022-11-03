import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import ToDo from './Components/ToDo';
import AppHeader from './Components/Header/Header';
import SettingsForm from './Components/SettingsForm/SettingsForm';
// import AuthComponent from './Components/AuthComponent/AuthComponent';
import Login from './Components/Login/Login';
import AuthContext  from './Context/AuthContext/AuthContext';

export default class App extends React.Component {
  render() {
    return (
      <>
      <AuthContext>

        <Router>
          <AppHeader />
          <Login />
          <Routes>
            {/* <AuthComponent> */}
            <Route
              path="/"
              element={<ToDo />}>
            </Route>
            {/* </AuthComponent>
            <AuthComponent> */}
            <Route
              path="/settings"
              element={<SettingsForm />}>
            </Route>
            {/* </AuthComponent> */}
          </Routes>
          <Footer />
        </Router>


      </AuthContext>
      </>
    );
  }
}
