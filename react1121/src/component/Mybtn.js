import React,{Component,PropTypes} from 'react';

class Mybtn extends React.Component{
  render(){
    let styles ={
      backgroundColor:this.props.bg,
      borderRadius:'5px',
      color:'#fff',
      padding:'10px 15px',
      fontSize:'20px',
      border:'0'

    }
    return(
      <button style={styles}>{this.props.title}</button>
    )
  }
}

//设置默认属性
Mybtn.defaultProps = {
  title:'我是默认的标题',
  bg:'#000'
};

//检测传入的数据类型
Mybtn.propTypes = {
  title:PropTypes.string,
  bg:PropTypes.string
};
export default Mybtn;
