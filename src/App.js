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
import AuthContext from './Context/AuthContext/AuthContext';
// import { useContext, } from 'react';
// import { When } from 'react-if';

const App = () => {

  // const { loggedIn } = useContext(AuthContext);


  return (
    <>
      <AuthContext>

        <Router>
          <AppHeader />
          {/* <When condition={loggedIn}> */}
          <Routes>
            <Route
              path="/"
              element={
                <ToDo />}>
            </Route>
            <Route
              path="/settings"
              element={
                <SettingsForm />
              }>
            </Route>
          </Routes>
          {/* </When> */}
          <Footer />
        </Router>


      </AuthContext>
    </>
  )

}

export default App;