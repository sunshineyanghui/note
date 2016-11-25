import React from 'react';
import Mybtn from './Mybtn';
class Footer extends React.Component{
  render(){

    return(
      <div>
        Footer
        <Mybtn title='我是footer' bg='#666' />
      </div>
    )
  }
}

export default Footer;
