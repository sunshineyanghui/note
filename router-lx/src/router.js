import React, { Component } from  'react';
import { Router, Route, hashHistory,IndexRoute } from 'react-router';
import App from './App';
import Home from './Home';
import About from './About';
import Contact from './Contact';
class Routes extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="about" component={About}/>
          <Route path="contact" component={Contact}/>
        </Route>
      </Router>
    );
  }
}

export default Routes;
