import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import {Link} from 'react-router';
import { Router, Route, browserHistory } from 'react-router';
class App extends React.Component {
  render(){
    return(
      <div>
        <Link to='/hello1'>Hello1</Link>
        <Link to='/hello2'>Hello2</Link>
      </div>
    )
  }
}

class Hello1 extends React.Component {
  render(){
    return(
      <h1>
        Hello1 Page
      </h1>
    )
  }
}

class Hello2 extends React.Component {
  render(){
    return(
      <h1>
        Hello2 Page
      </h1>
    )
  }
}

const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path='/' component={App} />
    <Route path='/hello1' component={Hello1} />
    <Route path='/hello2' component={Hello2} />
  </Router>
);
ReactDOM.render(renderRoutes(), document.getElementById('app'));
