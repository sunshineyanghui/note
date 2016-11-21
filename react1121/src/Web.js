import React from 'react';
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';

class Web extends React.Component{
  render(){

    return(
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}

export default Web;
