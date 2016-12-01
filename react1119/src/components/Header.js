import React from 'react';
import sky from '../images/sky.jpg';
let Styles ={
  color:'red'
}

class Header extends React.Component{
  constructor(){
    super()
    this.state = {
      show: false,
      show1: 'JavaScript',
      hello:0
    }
  }

  handleClick(){
    // console.log(this);
    this.setState({
      // show:true
      show:!this.state.show,
      hello:this.state.hello + 1
    })
  }



  styles(){
    return{
      color:'blue'
    }
  }

  render(){
    let styles={
      ul:{listStyle:'none',
        //backgroundImage: 'url(' + sky + ')'
        backgroundImage: `url(${sky})`
       },
      li:{display:this.state.show?'block':'inline-block' ,padding:'10px 20px'}
    }
    console.log(this.styles())
    return(
      <div>
        {this.state.hello}
        {this.state.show?'我是显示':'我是隐藏'}

        <h1 style={Styles} /*onClick={this.handleClick}*/>get Bootstrop</h1>
        <h1 style={this.styles()} onClick={this.handleClick.bind(this)}>get Bootstrop</h1>
        <ul style={styles.ul} className="menu">
          <li style={styles.li}>Bootstrop</li>
          <li style={styles.li}>get start</li>
          <li style={styles.li}>css</li>
          <li style={styles.li}>comments</li>
          <li style={styles.li}>{this.state.show1}</li>
        </ul>


        <img src={sky} alt="sky"/>
      </div>
    )
  }
}
export default Header;
