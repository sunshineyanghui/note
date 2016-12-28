你好redux

首先解决一个问题，学react为何还要学习Redux?

Redux　是一个配合React使用的数据流管理工具，负责组件间通信。只会React是不能做出复杂的效果的。你可能也会说，组件间通信可以直接用组件互相操作的形式，但是如果没有Redux，组件间的随意互相操作，很快代码就会成为面条代码。

### Redux 作者

Redux　的作者名字叫　Dan ,是Redux之父，但是现在他有另外一个身份，他目前已经是Facebook　的员工，目前是React项目老大，目前是React项目老大，以前React的老大petehunt目前已经离职，

Dan的名言

>一个React的props还用不好的开发者，是不应该去学习　Redux

至少学完一个月之后在了解Redux是最佳时机。

### 参考课程

haoqicat.com

- [塔顶上的 Redux](http://haoqicat.com/redux-tower)
- [React 手牵手](http://haoqicat.com/hand-in-hand-react)
- [Dan同学自己的React 入门课]

# Redux Store 数据大本营

数据流管理工具
一切数据都要保存到store之中，组件自己不保留自己的state数据

### 创建　Store?

其实store的主体就是写到store.js中的数据：
类似
```
let comments=[
'hello1',
'hello2'
]
```

但是
```
npm install --save redux
```

到　store.js中先导入

```
import { createStore } from 'redux';
```
