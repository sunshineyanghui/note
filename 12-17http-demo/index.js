const express = require('express');
const app = express();
//编译器
const bodyParser = require('body-parser');
//使用中间件
app.use(express.static('public'));
// app.use(bodyParser.urlencoded());//解析表单提交的文件
app.use(bodyParser.json());
app.get('/',function(req,res){
  console.log('hello');
  res.sendFile('index.html');
})
app.post('/login',function(req,res){
  console.log('login api...');
  console.log(req.body.username);
})

// app.get('/user/:id' ,function(req ,res){
//   console.log(req.params.id)//后台打印的
//   res.send(req.params.id)//前台打印的
// })
app.listen(3000,function(){
  console.log('running on port 3000...');
})
