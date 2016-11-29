import React from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
class App extends React.Component{
  render(){

    return(
      <div>
        <Header/>
        {this.props.children}
        <Footer/>
      </div>
    )
  }
}

export default App;
