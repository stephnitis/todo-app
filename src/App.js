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

export default class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <AppHeader />
          <Routes>
            <Route
              path="/"
              element={<ToDo />}>
            </Route>
            <Route
              path="/settings"
              element={<SettingsForm />}>
            </Route>
          </Routes>
          <Footer />
        </Router>
      </>
    );
  }
}
