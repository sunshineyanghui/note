import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';
class Contact extends React.Component{
  constructor(){
    super();
    this.state={
      data:{},
      wait:true
    }
  }
  componentDidMount(){
    axios.get('http://api.github.com/users/sunshineyanghui')
    .then( res => this.setState({
      data:res.data,wait:false
    }))
  }
  render(){

    return(
      <div　className="container">
        <h1 className="text-center">我的github信息</h1>
        {this.state.wait ? '请稍等'　:
        <div>
        <img src={this.state.data.avatar_url} />
         <p>{this.state.data.name}</p>
         <p>{this.state.data.login}</p>
       </div>
      }
      </div>
    )
  }
}

export default Contact;
