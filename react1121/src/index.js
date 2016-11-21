import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
// import Mybtn from './Mybtn';
import Web from './Web';
let comment = [
  '这是第一条评论',
  '这是第二条评论',
  '这是第三条评论',
  '这是第四条评论',
  '这是第五条评论',
  '这是第六条评论'
]

// ReactDOM.render(
//   <App name='yanghui' age={23} comment={comment} />,
//   document.getElementById('root')
// )

// ReactDOM.render(
//   <div>
//     <Mybtn title='click' bg='#ccc'/>
//     <Mybtn title='button' bg='#cdf'/>
//     <Mybtn title='submit' bg='#abc'/>
//   </div>,
//   document.getElementById('root')
// )

ReactDOM.render(
  <Web />,
  document.getElementById('root')
)
