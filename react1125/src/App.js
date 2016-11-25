import React from 'react';
class App extends React.Component{
  constructor(){
    super();
    this.state={fontSize:26,show:false}

  }
handleClick(e){
  console.log(e.deltaY);
  this.setState({
    fontSize:this.state.fontSize+e.deltaY/100
  })
}
handleContext(e){
  e.preventDefault();
  this.setState({
    show:!this.state.show
  })
}
handleJump(e){
  e.preventDefault();
  //这里阻止默认事件必须是　e.preventDefault();
  // return false
}
  render(){
    let styles={fontSize:`${this.state.fontSize}px`}
    return(
      <div onWheel={this.handleClick.bind(this)} style={styles} onContextMenu={this.handleContext.bind(this)}>
        滚轮事件，向上我变小，向下我变大<br />
        {this.state.show ? '哈哈哈' : '本文版权是我的' }<br />

        <a href="http://www.github.com" onClick={this.handleJump.bind(this)}>点我是阻止默认事件</a>
      </div>
    )
  }
}

export default App;
