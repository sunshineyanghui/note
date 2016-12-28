## 第一种方法
index.js
```js
import { createStore } from 'redux';

// 这是一个 reducer，形式为 (state, action) => state 的纯函数。描述了 action 如何把 state 转变成下一个 state。

// state 的形式取决于你，可以是基本类型、数组、对象、
// 甚至是 Immutable.js 生成的数据结构。惟一的要点是
// 当 state 变化时需要返回全新的对象，而不是修改传入的参数。
function counter(state = 0, action) {
  switch (action.type) {
  // case 'INCREMENT':
  //   return state + 1;
  // case 'DECREMENT':
  //   return state - 1;
  case 'CHANGE':
     return state +action.num;
  default:
    return state;
  }
}

// 创建 Redux store 来存放应用的状态。
// API 是 { subscribe, dispatch, getState }。
let store = createStore(counter);
console.log(store.getState());
store.dispatch({type:'INCREMENT'})
console.log(store.getState());
// 一个单纯渲染页面内容的函数
const PureRender = () => {
  document.getElementById('app').innerText = store.getState();
}

// 可以手动订阅更新，也可以事件绑定到视图层。
store.subscribe(PureRender);
// 执行渲染函数
PureRender();
function actionCreate(num){
  return{
    type:'CHANGE',num
  }
}
// 改变内部 state 惟一方法是 dispatch 一个 action。
// action 可以被序列化，用日记记录和储存下来，后期还可以以回放的方式执行
document.getElementById('jia').addEventListener('click', function( e ){
  // store dispatch 调度分发一个 action（fire）
  store.dispatch(actionCreate(5));
})

document.getElementById('jian').addEventListener('click', function( e ){
  // store dispatch 调度分发一个 action（fire）
  store.dispatch(actionCreate(-5));
})

```

html
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  <div id="app"></div>
  <button id="jia">+1</button>
  <button id="jian">-1</button>
  <script src="./build/bundle.js"></script>
</body>
</html>
```

## 第二种方法
