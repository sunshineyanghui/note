import React from 'react';
import jquery from 'jquery';
import axios from 'axios';
import GitShow from './GitShow';
class App extends React.Component{
  constructor(){
    super();
    this.state={
      data:{},
      wait:true
    }
  }
  componentDidMount(){
    var _this = this;
    //1.原生
    // var request = new XMLHttpRequest();
    // //监听state变化
    // request.onreadystatechange=function(){
    //   if (request.readyState==4 && request.status==200) {
    //     var dataobg = JSON.parse(request.responseText);
    //     console.log(dataobg);
    //     _this.setState({
    //       data:dataobg,
    //       wait:false
    //     })
    //   }
    // }
    // request.open("GET","https://api.github.com/users/sunshineyanghui",true);
    // request.send();

    //2.jq

    // jquery.get('https://api.github.com/users/sunshineyanghui',function(data,status){
    //   // alert(status);
    //   _this.setState({
    //     data:data,
    //     wait:false
    //   })
    // })


  }
  handleSubmit(e){
    e.preventDefault();
    let value = this.refs.input.value;
    axios.get(`https://api.github.com/users/${value}`)
    .then(response => this.setState({data:response.data,wait:false}))

    .catch(error => alert(error))
  }

  //superagent
  // componentDidMount(){
  //   superagent
  //   .get('https://api.github.com/users/sunshineyanghui')
  //   .end(function(err, res){
  //    if(err) return console.log(err);
  //      if (res) {
  //      console.log(res)        
  //      }
  //   });
  // }
  render(){
    return(
      // <div>
      //   {this.state.wait ? "正在加载数据" :
      //     <div>
      //       <img　style={{width:'100px',height:'100px',borderRadius:'50%'}} src={this.state.data.avatar_url} />
      //       <p>姓名：{this.state.data.name}</p>
      //       <p>用户名：{this.state.data.login}</p>
      //     </div>
      // }
      // </div>

      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input placeholder="search git" ref="input"/>
        </form>
        {this.state.wait ? 'loading...' : <GitShow gitinfo={this.state.data}/> }
      </div>
    )
  }
}

export default App;
