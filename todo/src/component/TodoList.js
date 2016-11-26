import React from 'react';

class TodoList extends React.Component{
  handleChange(id){
    // alert(i)
    this.props.handleCompleted(id);
  }
  handleDel(id){
    this.props.handleDel(id);
  }
  render(){

    let list = this.props.items.map( item =>
      <div key={Math.random()} className='item'>
         <input type="radio" checked={item.completed} onChange={this.handleChange.bind(this,item.id)}/>
         <span className="title" style={item.completed ? {textDecoration:'line-through',opacity:'0.6'} : null}>{item.title}</span>
         <button className="itembtn" onClick={this.handleDel.bind(this,item.id)}>×</button>
       </div>
    )
    return(
        <div>
          {list}
        </div>
    )
  }
}
TodoList.propTypes = {
  items: React.PropTypes.array
};
export default TodoList;
