import React from 'react';
class Add extends React.Component{
  constructor(){
    super();
    this.state={num:0}
  }
  handleClick(){
    this.setState({num:this.state.num+1})
  }

  render(){
    return(
      <div>
      {this.state.num}
      {this.props.children}
      <button onClick={this.handleClick.bind(this)}>click+1</button>
    </div>
    )
  }
}
export default Add;
