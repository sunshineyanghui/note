import React from 'react';

class GitShow extends React.Component{
  render(){
    console.log(this.props.gitinfo);
    let info = this.props.gitinfo;
    return(
      <div>
        <img src={info.avatar_url} />
        <p>姓名:{info.name}</p>
        <p>用户名:{info.login}</p>
      </div>
    )
  }
}

export default GitShow;
