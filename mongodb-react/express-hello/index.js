const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
var User = require('./models/user')

mongoose.Promise = global.Promise;//除去警告
mongoose.connect('mongodb://localhost:27017/digicity');
app.use(cors());

var db = mongoose.connection;
db.on('error',console.log);
db.once('open', function(){
  console.log('success!')
});


app.get('/users',function(req,res){
  User.find(function(err, users) {
    if (err) return console.log(err);
    console.log(users);
    res.json({users});
  })
});

app.get('/user/:_id' ,function(req ,res){
  // console.log(req.params._id);//后端打印的
  // res.send(req.params._id)//前端打印的
  User.findById(req.params._id ,function(err,user){
    console.log(user)
    res.json({user})
  })
})

app.listen(3000,function(){
  console.log('running on port 3000...')
});
