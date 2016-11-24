import React from 'react';

import TodoList from './component/TodoList';
import TodoControl from './component/TodoControl';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      data:[
        {title:'hello',completed:false},
        {title:'world',completed:true}
      ],
      // 显示的数据，0 All，1 Active，2 Completed
      show:0
    }
  }
  handleCompleted(i){
    let changeComp = !this.state.data[i].completed;
    this.state.data[i].completed = changeComp;
    // console.log(changeComp);
    this.setState({
      data:this.state.data
    })
  }
  handleDel(i){
    this.state.data.splice(i,1);
    this.setState({data:this.state.data});
    console.log(this.state.data);
  }
  handleSubmit(e){
    e.preventDefault();
    let title = this.refs.input.value.trim();
    this.refs.form.reset();
    if (!title || title=='') {
      alert('内容不能为空');
      return
    }
    let newData = {title:title,completed:false};
    this.state.data.unshift(newData);
    this.setState({data:this.state.data});
  }
  handleShow(n){
    this.setState({show:n})
  }
  render(){
    // 将需要显示的过滤出来传给 TodoList
    if (this.state.show==0) {
      var showData = this.state.data;
    }else if (this.state.show==1) {
      var showData = this.state.data.filter( (item) => !item.completed )
    }else if (this.state.show==2) {
      var showData = this.state.data.filter( (item) => item.completed )
    }
    // console.log(showData);
    return(
      <div className='main'>
        <h1 className='title'>Todos</h1>
        <form onSubmit={this.handleSubmit.bind(this)} ref='form'>
          <input placeholder='what will you do?' type='text' ref='input' className='add'/>
        </form>
        <TodoList data={showData}
          handleCompleted={this.handleCompleted.bind(this)}
          handleDel={this.handleDel.bind(this)}/>
        <TodoControl handleShow={this.handleShow.bind(this)}/>
      </div>
    )
  }
}

export default App;
