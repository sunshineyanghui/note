import React from 'react';
import TodoList from './TodoList'
class TodoAdd extends React.Component{
  constructor(){
    super();
    this.state={
      items:['123','456']
    }
  }
  handleClick(){
    let newItem =this.refs.input.value.trim();//trim()去掉前后空格
    this.refs.input.value=null;
    if (newItem == '' && !newItem) {
    this.refs.input.focus();
    return alert('输入内容不能为空')
    }
    this.state.items.push(newItem)
    this.setState({items:this.state.items})
  }
  render(){
    return(
      <div>
        <TodoList items={this.state.items} ref="input"/>
          <h3>TODO</h3>
          <input type="text" onClick={this.handleClick.bind(this)} /><button>TodoAdd #{this.state.items.length+1}</button>
      </div>
    )
  }
}
export default TodoAdd;
