import React from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import ToDo from './Components/ToDo';

export default class App extends React.Component {
  render() {
    return (
      <>
      <Header />
      <ToDo />
      <Footer />
      </>

    );
  }
}
