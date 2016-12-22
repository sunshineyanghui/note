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

同时，前台的请求方法和链接，要跟后台 express api 中的方法和链接对应上，才能正确触发后台的对应 api 所以，后台处理这次请求的 api 应该写成：

```
app.post('/login', function(){
  ...
})
```

可以这样说，form 的 action 和 method 的值，就决定了，点 submit 按钮的时候，form 发出的请求是

```
POST /login
```

而，前台请求的格式，就决定了，后台 api 的匹配格式，就是

```
app.post('/login', ...)
```

### 后台 api 的实现

后台 api 中，我们想要做的，就是打印出前台表单提交的信息。所以代码直观上 我们可以写成这样

```
app.post('/login', function(req, res){
  console.log(req.body.username);
});
```

但是上面的代码，在前台请求，会报错：

```
TypeError: Cannot read property 'username' of undefined
```

意思很明确，就是 `req.body` 为空。

### 解决 req.body 为空的问题

express 默认是不能得到请求的主体（ body ）的，所以上面的错误就不难理解了。那么如何解决这个问题呢？

安装 body-parser 就可以了，body 是主体的意思，parser 解析器。


第一步装包：

```
npm install --save body-parser
```

第二步导入：

```
const bodyParser = require('body-parser');
```

第三步使用：

body-parser 是一个中间件，用 app.use() 加载一下即可。

```
app.use(bodyParser.urlencoded());
```

然后，重启 `node index.js` 前台再次发出请求，`req.body` 就定义了， 后台 console 中可以打印出 yanghui 字样。]

### 总结

from 数据已经成功提交到了后台，下一步的操作就应该是把数据保存的 mongodb 数据了。 这个我们可以参考 https://happypeter.github.io/digicity/express/4-mongoose.html 。

###代码

index.js

```

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded());
app.use(express.static('public'));

app.get('/', function(req, res){
  res.sendFile('index.html');
})

app.post('/login', function(req, res){
  console.log('login api...');
  console.log(req.body.username);
})

app.listen(3000, function(){
  console.log('running on port 3000...');
});
```

public/index.html

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  <h1>Login</h1>
  <form action="/login" method="post">
    <input type='text' name='username' />
    <input type='submit' />
  </form>
</body>
</html>
```

package.json

```
{
  "name": "http-demo",
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
    "body-parser": "^1.15.2",
    "express": "^4.14.0"
  }
}
```

# 用 POST 传复杂数据到服务器（ axios 篇）

在 React 应用中，比较少会用到 form 直接提交数据的形式，而更多是采用更为灵活的一种方式， 那就通过 axios/fetch 这样的 http 客户端来发 POST 请求。

跟 from 提交形式不同，axios 提交的内容类型是

```
Content-Type: application/json
```

### 我们先来实现后台代码

基本上就是在上节的基础上，修改一行代码即可

```
--- app.use(bodyParser.urlencoded());
+++ app.use(bodyParser.json());
```

.json 接口，可以到 `body-parser` 的 Readme 中查到。

### 使用 curl 调试 api

```
curl -H "Content-Type: application/json" -X POST -d '{"username":"yanghui"}' http://localhost:3000/login
```

上面代码中，`-H` 用来设置头部（ header ），这里我们设置的值是 `Content-Type: application/json` 。`-X` 用来设置请求方法，这里设置的值是 `POST` 。`-d` 用来设置数据， 具体的值就是后面的 `json` 字符串。

### 前台实现 axios 代码

写一个 react 项目太麻烦，所以，我们在 index.html 里面直接写 axios 代码，先导入后使用

```
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
  var data = {
    username: 'yanghui'
  }
  axios.post('/login', data);
</script>
```

这样，前台直接刷新 index.html 页面，就可以发送跟前面 curl命令一样效果的请求了。chrome中查看，请求 Headers 中有：

```
Content-Type:application/json;charset=UTF-8
```

表示 axios 的数据，默认就是按照 `application/json` 发送的。

### 总结

使用 axios 发送数据，是最为灵活和强大的一种方式，以后我们会用到的比较多。


# 梳理前台向后台传数据的三种形式

前面我们介绍了三种形式，都可以从前端往后台传递数据，下面对它们进行一些对比。其中有很多对称的美感。

### 哪三种？

- 数据嵌入链接中，通过 GET 传，简称“链接传参”
- 数据写入 form 中，通过 POST 请求，简称”form 传参“
- 通过 axios ，通过 POST 请求传，简称”axios 传参“

### 各自特点对比

对比一下，链接传参数，走 GET 请求，因为 GET请求中没有请求主体（body），所以只能走链接。好处是后台 express 代码中不用装中间件，直接可以用 req.params 来接收。

对应的，form 传参数和 axios 传参，都是POST请求，数据都是通过请求的body携带到服务器的。优点是传递数据形式比较灵活强大，但是后台express需要安装body-parser这个中间件之后，才可以用req.body获得传递过来的数据。

### 各自适用场合

- 链接传参，适合一些简短信息，例如 `GET /users/12345` ，传递 `user id`
- form 传参数，可以少用，因为 axios 传 json 这种形式更为灵活简单
- axios 传参，最灵活，传递 JSON 数据，形式也美观，可以作为主力传参数的方式使用



i hear and i forget ,i do and i remember
