import React from 'react';
import ReactDOM from 'react-dom';
import './style';

import App from './App';
import Test from './Test';
import SelectBar from './SelectBar';


// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(
//     element,
//     document.getElementById('root')
//   );
// }
//
// setInterval(tick, 1000);

function setState(cb){
  cb(1,2)
}
setState(function(x,y){
  console.log(x+y);
})
ReactDOM.render(<SelectBar />,document.getElementById('root'))
