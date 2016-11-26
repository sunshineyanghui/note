import React from 'react';
class TodoControl extends React.Component{
  handleClick(id){
    this.props.handleShow(id)
  }

  render(){
    let styles={
        div:{
          margin:'20px 0'
        },
        btn:{
          color:'#000',
          backgroundColor:'#ccc',
          padding:'10px',
          marginLeft:'10px',
          border:'none'
        },
        active:{
          color:'#fff',
          backgroundColor:'#00bcd4',
          marginLeft:'10px',
          padding:'10px',
          border:'none',
          boxShadow: 'rgba(0, 0, 0, .8) 0px 0px 5px'
        }
      }

    let name = ['All','Active','Completed'];
    let buttons = name.map( (item,index) =>
    <button key={index} onClick={this.handleClick.bind(this,index)} style={this.props.show == index ? styles.active : styles.btn }>{item}</button>
  )
    return(
      <div style={styles.div}>
        {/* <button onClick={this.handleClick.bind(this,0)} style={this.props.show == 0 ?{backgroundColor:'#adc' : null}}>All</button>
        <button onClick={this.handleClick.bind(this,1)}>Active</button>
        <button onClick={this.handleClick.bind(this,2)}>completed</button> */}
        {buttons}
      </div>
    )
  }
}
export default TodoControl;
