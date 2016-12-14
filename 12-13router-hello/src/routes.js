import React, { Component } from 'react';
import { Router, Route, browserHistory ,IndexRoute } from 'react-router';
import App from './component/App';
import Home from './component/Home';
import Account from './component/Account';
import About from './component/About';
class Routers extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="/about" component={About} />
          <Route path="/account" component={Account} />
        </Route>
      </Router>
    );
  }
}

export default Routers;
