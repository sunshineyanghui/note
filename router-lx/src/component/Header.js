import React from 'react';
import { Link } from 'react-router';
class Header extends React.Component{
  render(){

    return(
      <div>
        <nav>
          <ul className="nav nav-pills nav-justified" role="tablist">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Header;
