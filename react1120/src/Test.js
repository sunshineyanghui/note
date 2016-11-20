import React from 'react';

class Test extends React.Component {
  constructor(){
    super();
    this.state={
      num:0
    }
  }
  handleClick(n,m){
    console.log(n,m);
    this.setState(
      {num:this.state.num+n}
    )
  }
  render () {
    return(
      <div>
          <p>数量：{this.state.num}</p>  
          <button onClick={this.handleClick.bind(this,-1,'我是减一的第一个参数')}> 减一 </button>
          <button onClick={this.handleClick.bind(this,1,'我是加一的第一个参数')}> 加一 </button>
      </div>
    )
  }
}

export default Test;
