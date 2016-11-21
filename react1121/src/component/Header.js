import React from 'react';
import Mybtn from './Mybtn';
class Header extends React.Component{
  render(){

    return(
      <div>
        Header
        <Mybtn title='我是header' bg='#246' />
      </div>
    )
  }
}

export default Header;
