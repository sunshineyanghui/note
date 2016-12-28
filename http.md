# http 简介
http全称就是“超文本传输协议”，超文本就是html。
我们的浏览器和服务器进行通信，就是通过http来进行的。

### http的请求和相应

http协议最重要的两个概念就是请求(request)和响应(response)

请求是由浏览器发出的，响应是由服务器给出的。

请求由 **请求头** 和 **请求主体** 组成。响应由 **响应头** 和 **响应主体** 组成。

### 代码演示

来写一个简单的http服务器：
index.js代码如下
```js
const express = require('express');
const app = express();

app.get('/',function(req,res){
  console.log('hello');
  res.send('hello world');
})

app.listen(3000,function(){
  console.log('running on port 3000...');
})

```

然后后台

```
node index.js

```
启动后台服务器，跑在3000端口。

### 请求相应

前台如果用浏览器发请求，也能完成整个循环，但是看不到底层数据。所以我们用 curl 代替 浏览器来发请求：

```
curl -X GET localhost:3000 -v

```

上面　`-v` 参数，表示”现实详情”　

```
* Rebuilt URL to: localhost:3000/
*   Trying 127.0.0.1...
* Connected to localhost (127.0.0.1) port 3000 (#0)
> GET / HTTP/1.1
> Host: localhost:3000
> User-Agent: curl/7.50.1
> Accept: */*
>
< HTTP/1.1 200 OK
< X-Powered-By: Express
< Content-Type: text/html; charset=utf-8
< Content-Length: 11
< ETag: W/"b-XrY7u+Ae7tCTyyK7j1rNww"
< Date: Sat, 17 Dec 2016 01:41:15 GMT
< Connection: keep-alive
<
* Connection #0 to host localhost left intact
hello world
```

### 输出结构分析

请求头：

```
> GET / HTTP/1.1
> Host: localhost:3000
> User-Agent: curl/7.50.1
> Accept: */*
```
请求主体：没有。一般 GET 请求，是没有请求主体的。POST 一般是有主体的。

响应头，如下

```
< HTTP/1.1 200 OK
< X-Powered-By: Express
< Content-Type: text/html; charset=utf-8
< Content-Length: 11
< ETag: W/"b-XrY7u+Ae7tCTyyK7j1rNww"
< Date: Sat, 17 Dec 2016 01:40:49 GMT
< Connection: keep-alive
```

响应主体：

```
hello world
```

通常我们请求，就是请求一个 html 页面，那么响应主体就是：html 代码。


# 用GET 传参数到服务器

浏览器一般发出两类请求：GET ，POST 。GET 用来获取数据，POST 用来修改服务器数据。 GET 请求主体通常为空，那么如果用 GET 请求传递参数到服务器呢？

我们要解决的问题是：如何把 12345 传递给服务器。

### 先给出后台代码

index.js

```js
const express =  require('express');
const app = express();
const cors = require('cors');
app.use(cors());


app.get('/users/:id', function(req, res){
  console.log(req.params.id)
})

app.listen(3000, function(){
  console.log('running on port 3000...');
});
```
### 案例：传递用户 id 到服务器

现在我想请求一个具体的用户，通常会发这样的请求

```
GET /users/12345
```
# 用POST 发复杂数据到服务器　(form 篇)

浏览器中发 POST 请求，地址栏是无法做到的，通常有两种方式可以：一种就是用 html 的 form ，另外一种是 HTTP 客户端，例如 axios/fetch 。今天我们先介绍 form 的这种 形式。

### 内容类型

代码跑起来，填写表单（用户名 happypeter ），点 submit 按钮，发出一个 POST 请求，可以在 chrome 开发者工具的 Network 标签下看到，请求的头部（ Headers ） 中包含

```
Content-Type: application/x-www-form-urlencoded
```

表示发送的数据，的内容类型是 application/x-www-form-urlencoded 。

### 请求的主体

同样，在 chrome 的 Network 标签下，也可以看到，请求主体

```
username=yanghui
```
### 请求行

请求头的第一行叫做请求行 ，打开 chrome 开发者工具，点开相应请求， 看到我们这次请求的请求行如下：

```
POST /login
```
请求是由 form 发出的，对照代码我们会发现，`action='/login'` 对应这里请求行的 `/login` 链接 这一部分，`method='post'` 对应了请求行中的 `POST` ，也就是请求方法为 post 。



### axios
axios 是我们用来发 HTTP 请求到服务器端的，但是一个完整的 AJAX 其实是有两步组成：

- 第一步，向服务器发送请求，同时保证页面不刷新
- 第二步，服务器执行完成之后，客户端页面要做出调整

```
axios.post('/posts', data)
```
第二步，axios 也可以实现，就是

```
.then(function(){
  // 更改页面效果的 JS 代码
  })
```
.then()的执行条件就是服务成功返回之后

### .then()什么时候执行

服务器端执行成功。但是，如何服务器不给客户返回　200　的这个状态码　.then　就不执行

>小贴士：状态码
>status code 是服务器返回给客户端的一个整数，如果返回20x 表示返回成功　，如果返回　50x　表示服务器执行失败

具体操作，我们可以用　res.status(200)这样的明文发送状态码,但是我们只写

```
小贴士：状态码 Status Code 是服务器返回给客户端的一个整数，如果返回 20x 表示返回成功，如果返回 50x 表示服务器执行失败。
```

### .catch() 什么时候被执行
服务端执行失败。如果服务器给客户端返回500，那么 .catch() 就会被触发。
```
res.status(500)
```
这样，就会触发 .catch() 的语句。

###  页面实现任意功能的一般流程

从执行时间顺序来看：

- 首先手机页面数据
- 发送请求到服务器
- 服务器匹配客户请求的路由，执行相应API
- API中一般会涉及到数据库读写
- API返回数据，或者200/500 状态码给客户端
- 客户端收到响应，进行页面调整

从动手角度

- 先做API,然后用curl测试
- 然后调前台代码



1 browserHistory

```
import {Link,browserHistory} from 'react-router';
```

```
.then( res =>  {
  console.log(res);
  browserHistory.push('/');//添加完跳转到首页
});
```

2




加载完跳转到首页


i hear and i forget ,i do and i remember
