import React from 'react';

class App extends React.Component{
  // constructor(){
  //   super();
  //   this.state={
  //     like:true
  //   }
  // }
  // handleClick(){
  //   console.log('不懂');
  // }

//   myEvent(){
//     this.setState({
//       like:!this.state.like
//     })
//   }
//   render(){
//
//     let styles ={
//       div:{
//         width:'500px',
//         height:'500px',
//         backgroundColor:'#ccc',
//         display:this.state.like ? 'block' : 'none'
//       }
//     }
//     if (this.state.like) {
//       var content = '什么都不懂';
//     }else{
//       var content = '什么懂';
//     }
//     // let content = this.state.like ? '什么都不动'　: '什么都懂';
//     return(
//       <div onClick={this.myEvent.bind(this)}>
//         <p>我现在{content}</p>
//         <div style={styles.div}></div>
//       </div>
//     )
//   }
constructor(){
  super();
  this.state={
    show:false
  }
}
handleClick(){
  // this.setState({show:!this.state.show})
  this.setState((prevState,props) => ({show:!prevState.show}))//箭头函数
  // this.setState(function(prevState,props){
  //   console.log(prevState,props);
  //   return{
  //     show:!prevState.show
  //   }
  // })
}
  render(){
    return(
      <div>
        <button onClick={this.handleClick.bind(this)}>点击</button>
        <div className="bg"
          style={{display:this.state.show ? 'block' : 'none'}}
          onClick={this.handleClick.bind(this)}>

        </div>
        <ul className="menu" style={{left:this.state.show ? '0' : '-200px'}}>
          <h3>Title</h3>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>


      </div>
    )
  }

 }

export default App;
