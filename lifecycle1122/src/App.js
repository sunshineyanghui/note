import React from 'react';
import $ from 'jquery'
import Demo from './Demo';
class App extends React.Component{
  componentWillMount(){
    console.log('will');
    clearInterval(this.interval);
  }
  componentDidMount(){
    // console.log('did');
    console.log(this.refs.aaa);
    // this.refs.aaa.style.color='#abc'
    $(this.refs.aaa).css({color:'#ab1'})
    $('#dd').click(function(){
      alert('ccccc');
      console.log('ccccc');
    })

    //计时器
    //  this.interval = setInterval(() => this.tick(), 1000);
  }
  // tick(){
  //   this.setState({num:this.state.num+1})
  // }
  constructor(){
    super();
    this.state={
      num:0,
      show:true

    }
    console.log('initial state');
  }

  //点击加一
handleClick(){
  this.setState({num:this.state.num+1})
}
handleDestroy(){
  this.setState({show:false})
}

componentWillReceiveProps(){
  // console.log('componentWillReceiveProps');
}
shouldComponentUpdate(nextProps,nextState){
  console.log('shouldComponentUpdate');
  console.log(nextProps,nextState);
  // if (nextState.num>5) {
  //   return false;
  // }
  return true;
}

componentWillUpdate(){
  // console.log('componentWillUpdate');

}
componentDidUpdate(nextProps,nextState){
  // console.log('componentDidUpdate');
  // console.log(nextProps,nextState);
}
  render(){
    console.log('render');
    return(
      <div>
        你在本页面呆了{this.state.num}秒
        <button　onClick={this.handleClick.bind(this)}>点击加一</button>
        <button　onClick={this.handleDestroy.bind(this)}>去掉ｄｅｍｏ组件</button>
        {/* <Demo num={this.state.num}/> */}
        {this.state.show ? <Demo num={this.state.num}/> :null}
        <p ref="aaa" id="dd">我是一个ｐ标签</p>
      </div>
    )
  }
}

export default App;
