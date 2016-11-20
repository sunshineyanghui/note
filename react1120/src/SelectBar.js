import React from 'react';

class SelectBar extends React.Component {
  constructor(){
    super();
    this.state={
      tab:0
    }
  }
  handleClick(n){
    console.log(n);
    this.setState({tab:n})

  }
  render () {
    let box1 =(
      <div>
        <p>我是选项卡一</p>
        <p>我是选项卡一</p>
        <p>我是选项卡一</p>
        <p>我是选项卡一</p>
        <p>我是选项卡一</p>
      </div>
    )

    let box2 =(
      <div>
        <p>我是选项卡二</p>
        <p>我是选项卡二</p>
        <p>我是选项卡二</p>
        <p>我是选项卡二</p>
        <p>我是选项卡二</p>
      </div>
    )

    let box3 =(
      <div>
        <p>我是选项卡三</p>
        <p>我是选项卡三</p>
        <p>我是选项卡三</p>
        <p>我是选项卡三</p>
        <p>我是选项卡三</p>
      </div>
    )
    return(
      <div>
        <button onClick={this.handleClick.bind(this,0)}>选项一</button>
        <button onClick={this.handleClick.bind(this,1)}>选项二</button>
        <button onClick={this.handleClick.bind(this,2)}>选项三</button>
        <div>
          {
            this.state.tab == 0 ? box1:
            this.state.tab == 1 ? box2 : box3
        }
        </div>
      </div>
    )
  }
}

export default SelectBar;
