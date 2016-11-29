import React from 'react';
import MenuBar from './component/MenuBar';
import Footer from './component/Footer';
class App extends React.Component{
  render(){

    return(
      <div>

        <MenuBar />
        {this.props.children}

        <Footer />
      </div>
    )
  }
}

export default App;
