import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from '../Header/Header';
import Home from '../Home/Home';

const Main = () => {
  return <Router>
    <Fragment>
      <Header />
      <Route exact path="/" component={Home} />
    </Fragment>
  </Router>
}

export default Main;