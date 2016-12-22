# 添加 react-router

### 添加服务器软件

以为网站的本质：就是几个网页。就是几个静态文件。

网站要上线需要什么？第一个就是服务器硬件(简称server)，硬件之上还要安装　**服务器软件**　（简称server).

我们用express可以写一个静态的服务器软件，它的功能最少要包含什么呢？

- 用户访问网站，服务器要给




express 唯一内置中间件

```
app.use(express.static('public'));
```

http://www.expressjs.com.cn/guide/using-middleware.html
首先public 是个文件夹，这个名字是任意的名字。static的意思是静态，（静态文件就算是指纯粹的xxx.html,xxx.css.xxx.js这些文件，他们是不会被在服务器上执行的）。

这句话的意思是指搭建一个静态服务器，所有的页面都要放在public文件夹下。而且public下的文件都不会被服务器进行进一步的处理了，也就是说这里面不能有浏览器不能直接执行的格式了。

```
app.get('/', function(req, res){
  res.sendFile('index.html');
});
```

这三句的意思是：如果访问 `/` 就会给用户返回　index.html文件。

如果现在访问localhost:4000 网站可以正常进行路由的功能，所以像/hello1这样的链接是可以正常打开的。
但是如果用户直接在浏览器里直接打开　localhost:4000/hello1 ，是不能正常打开的。


### 修改server配置

```
app.get('*', function(req, res){
  res.sendFile('index.html'，{root:'public'});
});
```

现在就可以正常打开了

如果
