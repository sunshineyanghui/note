import React from 'react';
import TodoList from './TodoList'
class TodoAdd extends React.Component{
  render(){
    return(
      <div>
        <TodoList />
        <form>
          <h3>TODO</h3>
          <input type="text"  /><button>TodoAdd</button>
        </form>
      </div>
    )
  }
}
export default TodoAdd;
