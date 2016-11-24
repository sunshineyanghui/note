import React from 'react';

class Demo extends React.Component{
  constructor(){
    super()
    this.state={
      demoNum:5
    }
  }
  componentWillReceiveProps(){
    // console.log('componentWillReceiveProps==========');
  }
  shouldComponentUpdate(nextProps,nextState){
    // console.log('shouldComponentUpdate==========');
    // console.log(nextProps,nextState);
    return true;
  }

  componentWillUpdate(){
    // console.log('componentWillUpdate=========');

  }
  componentDidUpdate(){
    // console.log('componentDidUpdate==========');
  }
  componentDidMount(){
    console.log('did');
    //计时器
     this.interval = setInterval(() => this.tick(), 1000);
  }
  tick(){
    this.setState({demoNum:this.state.demoNum+1})
  }
  componentWillUnmount(){
    console.log('componentWillUnmount465465465456465');
    clearInterval(this.interval)
  }
  render(){
    // if (true) {
    //   return null;
    //
    // }//销毁
    return(
      <div>
        我是demo组件{this.props.num}<br/>
        自身的state数字{this.state.demoNum}
      </div>
    )
  }
}
export default Demo;
