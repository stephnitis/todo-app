import React from 'react';
import AppHeader from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import ToDo from './Components/ToDo';

export default class App extends React.Component {
  render() {
    return (
      <>

      <ToDo />
      <Footer />
      </>

    );
  }
}
