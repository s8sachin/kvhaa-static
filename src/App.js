import React, { Component, Fragment } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Img from './components/Img/Img';
import Partners from './components/Partners/Partners';
import Main from './components/Main/Main';


class App extends Component {
  render() {
    return (
      <div className='App'>
        <Main/>
      </div>
    );
  }
}

export default App;
