---
title:上手express框架
---

前面的课程中介绍了React ,React是一个 **前端框架** ，前端框架是运行在浏览器环境下，负责UI(user interface 用户界面)。

但是，我们想一想，如果只有 UI ，那么用户要看的数据从哪里来？用户需要保存的数据如何进行运算之后保存到数据库中？这部分的功能就需要后端代码来完成。今天我们要介绍的Express 就是一个后台框架。

我们可能知道，当下实现后台服务，最流行的方式就是使用Nodejs,Express就是Nodejs的一个框架，而且是Nodejs各种后台框架中最为通用，最为流行的一个，没有之一。所以学习 Nodejs最佳途径就是从 Express 入手。

### 你好Express

Express的官方位置是　http://www.expressjs.com.cn/　。官网上最吸引我们注意的是　**API** 这个关键字。API 是　**应用开发接口**　，　简称　**接口**　。而Express 就是用来制作后台接口的，或者说叫制作后台　API 的。

那么之后，我们整个项目的架构，就是用　Express 来制作后台API,这些API的使用者就是前台React 代码。

### hello word

现在我们就动手写一个　Express小程序。

第一步，要新建文件夹，并把它初始化为一个　Nodejs 项目：

```
mkdir express-hello
cd express-hello
npm init -y
```

这样文件夹就生成了一个　package.json ，有了这个文件，我们这个文件夹就可以叫做一个　**Nodejs项目**　了。

### 补充知识：框架，库，工具

- 工具就是文成特定的一个小功能软件，比如　Bable　
- 库：英文教　lib ,我们每天　import 的东西，就是库。库是把一系列的相关工具，组织到一起。例如lodash ,react。库里面的东西虽然多但是都是干一类工作的。
- 框架：英文是　framework，是把很多类功能的工具和库结合到一起，目的是完成整个项目。例如，RobyOnRails,Django ,j2EE ,React+friends , anguler+friends,meteor。

### 继续　Express 的　Hello world

下一步，进行装包

```
npm install --save express
```

小贴士：一个常见装包错误，如果我们项目文件夹的名和要装的包同名，例如

```
mkdir express
cd express
npm init -y
npm install --save express
```

安装就会失败，报错信息为：

```
Refusinng to install
```

解决方法是：修改项目文件夹名。

小贴士结束。

### 写代码，用ES6 ?

我们的前台代码，因为有Bable的支持，全部采用ES6来写。后台代码，我们会直接运行在nodejs 之上，用Bable (当然也可以用，但是配置比较麻烦，不值当的)。

如果我们到　Node.green 网站上，可以看到新版的Nodejs(7.0版本以上)对于　ES6支持已经到了　99%。所以，不用bable我们也可以直接用ES6语法，但是唯一要注意的就是不能用 import （也就是说nodejs是不支持ES6模块语法的），我们后台代码暂时需要用require来代替import 。require用的是　commonjs模块语法这个是nodejs原生支持的。

最终结论，ES6可以用。

### 真正的hello world 来了

参考[官网教程](http://www.expressjs.com.cn/starter/hello-world.html)，我们来写 Hello World 。

到项目中，创建一个 index.js 文件，内容如下：

```
const express = require ('express');
const app = express();
app.listen(3000);
```
上面三句代码，我们就自己动手实现了一个　**服务器**　（server）。服务器（这里指的是软件）的作用是，始终监听客户端的请求，或者说前端不给服务器发信号，服务器就什么都不做，但是也不死，只是循环执行，或者就叫始终加载监听（listen）。

上面的`3000`指的是　**3000端口**　，端口的英文是　port ,一个服务器好比一座大厦，有很多个门，3000就是其中一个

小贴士：const 和 let 的区别，目前只需记住，const 是
只读变量，let 是可以修改的变量。
小贴士结束。


上面的程序执行，就到后台运行

```
node index.js
```

因为我们写的 index.js 是一个 nodejs 程序，所以用node 命令去执行，这个执行过程跟浏览器已经脱离了。这个也基本上是我们到目前为止，唯一一个可以脱离浏览器执行的JS 程序。

但是，现在运行的效果，很不让人舒服，因为没有输出内容，解决这个问题，我们就可以把 app.listen 部分修改成下面这样：

```js
app.listen(3000, function(){
  console.log('running on port 3000...');
});
```

这样，后台执行的效果就是

```
$ node index.js
running on port 3000...

```

用户体验好了很多。上面添加的无名函数 `function(){...}` 在这里的作用是**回调函数**( callback function ) 。

小贴士：什么是回调函数？
回调函数是我们写 JS 程序，最常见的功能之一。程序会先执行一个操作，执行完这个操作后，**回过头来要调用** 的那个函数，就叫回调函数。

一般格式如下：

```js
app.listen(3000, function(){

});
```

一般回调函数的使用场合就是，之前的一个操作耗时比较长（或者是异步操作）这样的情况下才使用回调函数。大家暂时不必深究，异步操作未来会成为大家的必备知识。


### Express 服务器运行起来了，so what ？

服务器监听端口后，唯一的作用就是来根据端口传入的请求，来执行特定代码。

比如，我们在上面的 index.js 中，app.listen 语句的上面，添加如下代码：

```js
app.get('/', function(){
  console.log('request come in...');
})
```

上面代码中 `get('/')` 这是什么？

- get 是一个 http 请求的 **动词** ，类似的还有 post/delete/put 。
- `/` 是一个**路径** ，英文 path

一个动词加一个路径，这样就组成一个 **HTTP 请求** ，公式如下

```
request = verb + path + data
```

但是，这里的请求，不是**发出请求** ，而是 **接收请求** 。

### 现在来发客户端请求

现在我们需要的客户端请求是，一个

```
GET /
```

同时这个请求，必须来自3000端口。


可以发请求的方式不唯一，可以用浏览器地址栏，可以用页面的 form 发，也可以用 axios 发，后者使用专门的 API 调试工具 curl/postman来发。

Postman 是一个辅助工具，用它的目的就是美观方便。但是 Postman 需要用到谷歌的服务，所以需要我们的机器可以翻墙才行。

小贴士：翻墙方式：
- 免费的：https://laod.cn
- Peter 自己用：https://agentwho.rocks
小贴士结束。


现在，我们就用浏览器的地址栏来发请求。地址栏中输入

```
http://localhost:3000/
```

上的请求，默认动词就是 GET ，同时 `:3000` 用来指定端口号。

请求之后，会发现浏览器里没有任何输出，这是因为，我们的 express服务器根本就没有给前台返回任何字符串，回调函数中的 `console.log()`只能把字符串打印到后台。

### 前端和后端

前端，front-end，或者也可以叫前台。后端，back-end
也可叫后台。

前端代码运行环境是什么呢？对于我们 Web 开发者来说，就是浏览器。注意，浏览器是安装在用户自己的机器上的。也就是说前端代码运行在我们自己的笔记本或者 ipad 上，如果前端代码写的烂，那么考验的是我们自己设备的内存大小。


后端代码运行环境是？是一个放在人家机房里的刀片机。上面运行 Linux 操作系统。刀片机根本就没有显示器，当然也不能跑浏览器。所以后端代码的运行是脱离浏览器的。如果后端写的烂，那么考验的就是刀片机的内存够不够了。

然后，再从 API 的角度来聊聊。前端是 API 的消费者，后端是 API 的生产者。后台 API 写好之后，默认不运行，只有当前端发送过请求来的时候才会出发后台 API 代码运行。


当然，在平常开发的时候，我们并没购买刀片机，所有只能是用自己的笔记本来当刀片机用了。这时候，基本可以认为 express 写的代码就是后端代码，react 写的代码就是前端代码。

### 继续前面的代码：返回字符串

前面的回调函数中，console.log 打印字符串，只是出现在后端（服务器端）。前端得不到任何反馈。所以，我们可以把代码做如下修改

```js
app.get('/', function(req, res){
  res.send('Hello World');
})
```

上面代码中 `req` 是 request **请求** 的简写， `res` 是 response **响应** 的简写 。`res.send('Hello World');`的作用是从后端向前端浏览器返回字符串 `Hello World` 。


### 总结

到这里，我们一个 Express 的 Hello World API 就制作完毕，
我们需要掌握的概念就是：

- 前端和后端的区别
- API 基本格式
- Express 使用方式


### 全部代码

package.json 如下：

```json
{
  "name": "express-hello",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.14.0"
  }
}
```

index.js 代码如下

```js
const express =  require('express');
const app = express();


// 下面三行就是我们实现的一个 API
app.get('/', function(req, res){
  res.send('Hello World');
})

app.listen(3000, function(){
  console.log('running on port 3000...');
});
```

上面两个文件都放在一个 express-hello 文件夹中，然后

```
cd express-hello
npm install
node index.js
```

就可以把代码运行起来了。


 # React 牵手 Express

 仅仅有了 API ，功能还不完全。需要有前端来调用 API ，完成整个小功能。

在我们《JS 独孤求败》课程体系里面，前端代码我们都是用 React 来写，
所以前端和后端都是用 JS 来写。但是这里要提醒大家的是，前端和后端是
完全独立的两个项目，通过 API 来作为桥梁。其实，我们后端虽然是 Nodejs 写的，但是前端用 PHP/JAVA 也能写。

### 前端项目准备

前面的课程中，我们已经学习了 React 开发。那么先在就来写一个完全跟后台无关的 React 的 Hello World ，要求：

- 页面最终显示出来的，就是你的用户名，例如 happypeter
- 要用到 react 的 state ，constructor ，生命周期
- 用 ES6/Babel/Webpack

小贴士：创建 React 应用的脚手架项目
可以推荐的是 https://github.com/facebookincubator/create-react-app但是，我们需要对 Webpack 底层做一些了解，所以暂时不推荐使用脚手架
小贴士结束


所有代码都放到 react-with-express 这个文件夹中，代码如下：


src/index.js

```jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class App extends Component {
  constructor(){
    super();
    this.state = {
      username: ''
    };
  }
  componentWillMount() {
    this.setState({username: 'happypeter'});
  }
  render(){
    return(
      <div>
        {this.state.username}
      </div>
    )
  }
}

ReactDOM.render(<App/>,document.getElementById('app'));
```

package.json

```json
{
  "name": "react-with-express",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build": " ./node_modules/.bin/webpack"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-core": "^6.10.4",
    "babel-loader": "^6.2.4",
    "babel-preset-es2015": "^6.9.0",
    "babel-preset-react": "^6.11.1",
    "babel-preset-stage-0": "^6.5.0",
    "react": "^15.2.1",
    "react-dom": "^15.2.1",
    "webpack": "^1.13.1"
  }
}
```

webpack.config.js

```js
var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  }
};
```

.babelrc

```
{
  "presets": ["es2015", "react", "stage-0"],
  "plugins": []
}
```

index.html

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
  <script src="./build/bundle.js" charset="utf-8"></script>
</body>
</html>
```

### 为何 state 要设置两次

上面代码都是 React 的基础，我们不在重复，唯一可能感觉奇怪的是为何 constructor 中设置了一个 username 的初始值，然后又在生命周期函数 componentWillMount 中对 username 进行了覆盖。

为何要这么麻烦呢？这个后面结合 axios 向后台请求数据的代码，就会比较容易看出作用了。

下面来看如何发请求到服务器端。


### 安装 axios 发送 http 请求

axios 是常用的发 http 请求的工具（现在一般不提发 ajax 请求这个说法了）。

首先来进行装包：

```
npm install --save axios
```

把 axios 安装到 react-with-express 这个项目中。

装包之后，就可以到 src/index.js 中去使用了，代码如下

```js
import axios from 'axios';
```

我们当前的请求不希望是通过按钮来触发，而是希望，页面加载的时候，自动发出http 请求，向服务要数据，所以，代码非常适合写到生命周期函数中：

```js
componentWillMount() {
  axios.get('http://localhost:3000/').then(function(response){
      return console.log(response);
  })
}
```
