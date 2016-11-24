import React from 'react';

class TodoList extends React.Component{
  handleChange(i){
    this.props.handleCompleted(i)
  }
  handleDel(i){
    this.props.handleDel(i)
  }
  render(){
    var list = this.props.data.map( (item,i) => (
      <div key={i}>
        <input type='radio' checked={item.completed} onChange={this.handleChange.bind(this,i)}/>
        <span style={item.completed ? {textDecoration:'line-through'} : {textDecoration:'none'}}>{item.title}</span>
        <button onClick={this.handleDel.bind(this,i)}>删除</button>
      </div>
    ) )
    // console.log(this.props.data);
    return(
      <div>
        <span>任务数量：{this.props.data.length}</span>
        {list}
      </div>
    )
  }
}

export default TodoList;
