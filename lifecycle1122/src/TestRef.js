import React from 'react';
import Add from './Add';
class TestRef extends React.Component{
  handleClick(){
    this.refs.add.handleClick();
  }
  render(){
    return(
      <div>
        <Add ref="add" />
        <Add>我是children</Add>

        <Add><p>我是childrens</p><p>我是childrens</p><p>我是childrens</p><p>我是childrens</p></Add>
        <button onClick={this.handleClick.bind(this)}>父级</button>
      </div>
    )
  }
}
export default TestRef;
