import React from 'react';

class TodoControl extends React.Component{
  handleClick(n){
    this.props.handleShow(n)
  }
  render(){
    return(
      <div>
        <button onClick={this.handleClick.bind(this,0)}>All</button>
        <button onClick={this.handleClick.bind(this,1)}>Active</button>
        <button onClick={this.handleClick.bind(this,2)}>Completed</button>
      </div>
    )
  }
}

export default TodoControl;
