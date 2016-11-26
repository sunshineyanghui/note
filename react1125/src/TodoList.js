import React from 'react';

class TodoList extends React.Component{
  render(){
    let list =this.props.items.map( item =>
      <li key={Math.random()}>{item}</li>
    )
    return(
      <ul>
        {list}
      </ul>
    )
  }
}
TodoList.propsType={
  item:React.PropTypes.array
}
export default TodoList;
