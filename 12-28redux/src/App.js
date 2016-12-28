import React from 'react';
import { connect } from 'react-redux';
function actionCreate(num){
  return{
    type:'CHANGE',num
  }
}
class App extends React.Component {
  handleClick(num){
    this.props.dispatch(actionCreate(num))
  }


  render () {

    return(
    <div>
      {this.props.state}<br/>
      <button onClick={this.handleClick.bind(this,1)}>+1</button>
      <button onClick={this.handleClick.bind(this,-1)}>-1</button>
    </div>
    )
  }
}
function mapStateToProps(state){
  return{state:state}
}
export default connect(mapStateToProps)(App);
