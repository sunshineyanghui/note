import React from 'react';
import TodoList from './component/TodoList'
class App extends React.Component{
  constructor(){
    super();
    this.state={
      items:[
        {title:'我未完成',completed:false},
        {title:'我完成了',completed:true}
      ]
    }
  }
  // handleClick(){
  //   let newItem =this.refs.input.value.trim();
  //   this.refs.input.value=null;
  //   if (newItem == '' && !newItem) {
  //     this.refs.input.focus();
  //     return alert('输入内容不能为空')
  //   }
  //   this.state.items.push(newItem)
  //   this.setState({items:this.state.items})
  //
  // }

  handleSubmit(e){
    e.preventDefault();
    let inputValue =this.refs.input.value.trim();
    this.refs.input.value=null;
    if (inputValue == '' && !inputValue) {
      this.refs.input.focus();
      return alert('输入内容不能为空')
    }
    let newItem = {title:inputValue,completed:false}
    this.state.items.push(newItem)
    this.setState({items:this.state.items})

  }
  //标记完成
  handleCompleted(i){
    // alert('我是父组件')
    // console.log(i);
    this.state.items[i].completed=!this.state.items[i].completed;
    this.setState({
      items:this.state.items
    })
  }
  //删除一条
  handleDel(i){
    // alert('我是父组件')
    console.log(i);
    this.state.items.splice(i,1)
    this.setState({
      items:this.state.items
    })
  }

  render(){
    return(
      <div>
          <h3>TODO</h3>
          <TodoList items={this.state.items} handleCompleted={this.handleCompleted.bind(this)} handleDel={this.handleDel.bind(this)}/>
          {/* <input type="text" placeholder="add a todo" ref="input" />
          <button onClick={this.handleClick.bind(this)}>Add #{this.state.items.length+1}</button> */}


          <form onSubmit={this.handleSubmit.bind(this)} >
            <input type="text" placeholder="add a todo" ref="input" />
            <button>Add #{this.state.items.length+1}</button>
          </form>
      </div>
    )
  }
}
export default App;
