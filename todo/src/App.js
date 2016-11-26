import React from 'react';
import TodoList from './component/TodoList';
import TodoControl from './component/TodoControl'
class App extends React.Component{
  constructor(){
    super();
    this.state={
      items:[
        {title:'我未完成',completed:false,id:1},
        {title:'我完成了',completed:true,id:2}
      ],
      //show:0 All,show1 active ,show2 completed

      show:0
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
    let date = new Date();
    let newItem = {title:inputValue,completed:false,id:date.getTime()}
    this.state.items.push(newItem)
    this.setState({items:this.state.items})

  }
  //标记完成
  handleCompleted(id){
    // var index = this.state.items.findIndex( function (ele) {
    //   return ele.id== id
    // })
    var index = this.myFindIndex(id);
    this.state.items[index].completed=!this.state.items[index].completed;
    this.setState({
      items:this.state.items
    })
  }
  //删除一条
  handleDel(id){
    console.log(id);
    // var index = this.state.items.findIndex( function (ele) {
    //   return  ele.id== id
    // })
    var index = this.myFindIndex(id);
    this.state.items.splice(index,1)
    this.setState({
      items:this.state.items
    })
  }
  //筛选
  handleShow(id){
    this.setState({
      show:id
    })
  }
  myFindIndex(id){
    var index = this.state.items.findIndex( ele => ele.id==id )
    return index
  }
  render(){
    if (this.state.show==0) {
      var showItems = this.state.items
    }else if(this.state.show==1){
      var showItems = this.state.items.filter(function (element){
        return element.completed==false
      })
    }else if(this.state.show==2){
      var showItems = this.state.items.filter(function (element){
        return element.completed==true
      })
    }
    return(
      <div className="main">
          <h3>TODO</h3>

          <form onSubmit={this.handleSubmit.bind(this)} >
            <input type="text" placeholder="add a todo" ref="input" className="add" />
            <button className="addbtn">Add #{this.state.items.length+1}</button>
          </form>

          {/* TodoList */}
          <TodoList items={showItems} handleCompleted={this.handleCompleted.bind(this)} handleDel={this.handleDel.bind(this)}/>
          {/* <input type="text" placeholder="add a todo" ref="input" />
          <button onClick={this.handleClick.bind(this)}>Add #{this.state.items.length+1}</button> */}

          {/* TodoControl */}
          <TodoControl handleShow={this.handleShow.bind(this)} show={this.state.show}/>

      </div>

    )
  }
}
export default App;
