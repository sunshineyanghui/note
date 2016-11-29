import React from 'react';
import { Link } from 'react-router';
class Home extends React.Component{
  render(){

    return(
        <div className="jumbotron">
          <div className="container">
            <h1>Hello, world!</h1>
            <p>欢迎光临，我的主页！</p>
            <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
          </div>
        </div>
    )
  }
}

export default Home;
