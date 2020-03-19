var express = require('express');
var router = express.Router();
const {createHandler,deleteHandler,updateHandler,queryHandler} =require('./db')

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


router.get('/add',async function(req,res){
  console.log(req.query,'req')
  let text = decodeURIComponent(req.query.text) || '默认内容'
  let sql = `insert into blogs values(${null},'第n条数据','${text}',${new Date().getTime()},'李浩华')`
  let result = await createHandler(sql)
  console.log(result,'result')
  if(!result){
    res.send('数据插入失败')
    return
  }
  res.send(JSON.stringify(result))
})

router.get('/del',async function(req,res){
  let id = decodeURIComponent(req.query.id) || null
  let sql = `delete from blogs where id=${id}`
  let result = await deleteHandler(sql)
  if(!result){
    res.send('删除失败')
    return
  }
  res.send(JSON.stringify(result))
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

router.get('/update',async function(req,res,next){
  let id = req.query.id
  let sql = `update blogs set title = '更新标题${id}' where id = ${id}`
  let result = await updateHandler(sql)
  if(!result){
    res.send('更新失败')
    return
  }
  res.send(result)
})

module.exports = router;
