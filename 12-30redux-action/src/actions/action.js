import axios from 'axios';
export default function searchGit(name){
  return(dispatch,getState) => {
    return axios.get(`https://api.github.com/users/${name}`)
    .then(res => dispatch({type:'ADD_USERINFO',info:res.data}))
  }
}
