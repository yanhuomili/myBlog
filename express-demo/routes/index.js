var express = require('express');
var router = express.Router();
const {queryHandler} =require('./db')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/base',function(req,res,next){
  let base={
    message:'express 框架学习',
    date:Date()
  }
  res.send(JSON.stringify(base))
})

router.get('/getList',async function(req,res,next){
  let sql = 'select * from blogs'
  let data = {
    code: 0,
    msg: '请求成功'
  }
  let result = await queryHandler(sql)
  if(!result){
    data.code = 123
    data.msg= '请求失败'
    data.list=[]
    res.send(JSON.stringify(data))
    return
  }
  data.list = result
  res.send(JSON.stringify(data))
})


module.exports = router;
