import React from 'react';

class Forms extends React.Component{
  constructor(){
    super();
    this.state={
      value:'',sel:'Mango'
    }
  }
  handleSubmit(e){
    e.preventDefault();
    // console.log(this.refs.input.value);
    console.log(this.state.value);
  }
  handleChange(e){
    this.setState({
      value:e.target.value
    })
  }
 render(){
   return(
     <div>
       <form onSubmit={this.handleSubmit.bind(this)}>
         <input name="text" ref="input" placeholder="用户名"　value={this.state.value} onChange={this.handleChange.bind(this)}/>
         {/* <input type="submit" value="click" /> */}<br/>
         {/* <textarea value={this.state.value} onChange={this.handleChange.bind(this)}/><br/> */}

         <select value={mango} onChange={this.handleChange.bind(this)}>
           <option value="grapefruit">Grapefruit</option>
           <option value="lime">Lime</option>
           <option selected value="coconut">Coconut</option>
           <option value="mango">Mango</option>
         </select>
         <button type="submit">提交</button>

       </form>
     </div>
   )
 }
}
export default Forms;
