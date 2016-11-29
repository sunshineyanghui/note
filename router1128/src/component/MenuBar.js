import React from 'react';
import { Link } from 'react-router';
class MenuBar extends React.Component{
  render(){

    return(
      <div className="container">
        <ul className="nav nav-pills">
          <li role="presentation"><Link to="/" activeClassName="active" onlyActiveOnIndex={true}>Home </Link></li>
          <li role="presentation"><Link to="/about">About </Link></li>
          <li role="presentation"><Link to="/contact">Contact </Link></li>
        </ul>
      </div>
    )
  }
}

export default MenuBar;
