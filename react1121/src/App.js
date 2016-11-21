import React from 'react';
class App extends React.Component{
  // constructor(props){
  //   super(props)
  //   console.log(this.props);
  // }
  render(){
    let show =[];
    for (var i = 0; i < this.props.comment.length; i++) {
      show.push(
        <div key={i}>
          <span>{this.props.comment[i]}</span>
          <span>　第{i+1}条</span>
        </div>

      )
    }
    console.log(this.props);
    console.log(typeof this.props.age);
    return(

      <div>
        {/* {this.props.name}<br/>
        {this.props.age}<br/>
        {this.props.arr} */}

        <h1>评论列表</h1>
        {show}
      </div>
    )
  }
}

export default App;
