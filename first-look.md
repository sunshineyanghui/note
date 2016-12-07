---
title:上手express框架
---

前面的课程中介绍了React ,React是一个 **前端框架** ，前端框架是运行在浏览器环境下，负责UI(user interface 用户界面)。

我们可能知道，当下实现后台服务，最流行的方式就是使用Nodejs,Express就是Nodejs的一个框架，而且是Nodejs

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

参考官网教程我们来写

```
const express = require ('express');
const app = express();
app.listen(3000);
```
上面三句代码，我们就自己动手实现了一个　**服务器**　（server）。服务器（这里指的是软件）的作用是，始终监听客户端的请求，或者说前端不给服务器发信号，服务器就什么都不做，但是也不死，只是循环执行，或者就叫始终加载监听（listen）。

上面的`3000`指的是　**3000端口**　，端口的英文是　port ,一个服务器好比一座大厦，有很多个门，3000就是其中一个



### 继续前面的代码：返回字符串

前面的回调函数中，console.log 打印字符串，只是出现在后端（服务器端）。前端得不到任何反馈。所以，我们可以把代码做如下修改

```js
app.get('/' , function(req, res){
  res.send('hello,world')
})
```

上面代码中　`req`是request **请求** 的简写，`res`是response **响应**　简写。　`res.send('hello word')` 的作用是从后端向前端浏览器返回字符串　`hello world`

### 总结

到这里，我们一个Express　的　hello world　API　就制作完毕，我们需要掌握的概念就是：

- 前端和后端的区别
- API的基本格式
- 
