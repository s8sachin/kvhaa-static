import React, { Component, Fragment } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Img from './components/Img/Img';
import Partners from './components/Partners/Partners';


class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <Partners />
      </div>
    );
  }
}

export default App;
