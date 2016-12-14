import React from 'react';
import axios from 'axios';
//加载lodash中的一小部分

class Home extends React.Component {
  constructor(){
    super();
    this.state={
      users:[],
      user:{}
    }
  }
  componentWillMount(){
    axios.get('http://localhost:3000/users')
    .then( res => this.setState({users:res.data.users}))
  }
  handleClick(id){

    axios.get('http://localhost:3000/user/'+id)
    .then( res => this.setState({user:res.data.user}))
  }
  render () {
    console.log(this.state.users);
    return(
    <div>
      {this.state.users.map( (user,i)  => <p key={i} onClick={this.handleClick.bind(this,user._id)}> {user.username}</p>)}
      {

        <div>
          <h1>id为{this.state.user._id}的用户信息为</h1>
          <p>{this.state.user.username}</p>
          <p>{this.state.user.age}</p>
          <p>{this.state.user.email}</p>
        </div>
    }
    </div>
    )
  }
}

export default Home;
