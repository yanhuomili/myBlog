var express = require('express');
var router = express.Router();
const {SuccessModel,ErrorModel} = require('../model/httpResModel')
const {addArticle,getArticleList} = require('../controller/blog')
const middleware = require('../middleware/index')

/* blog */
/* 路由模块只处理返回结果，参数的解析以及数据的组装放到controller层面去 */
router.get('/add',async function(req,res){
  const result =await addArticle(req.query)
  if(!result){
    res.json(new ErrorModel('新增失败'))
    return new ErrorModel('新增失败')
  }
  res.json(new SuccessModel(result))
  return new SuccessModel(result)
})

router.get('/articleList',middleware,async function(req,res){
  let author = req.query.author || ''
  let keyword = req.query.keyword || ''
  if(req.query.isadmid){
    if(req.session.username == null){
      res.json(new ErrorModel('用户未登录'))
      return
    }
    /* 强制查询自己的文章 */
    author = req.session.username
  }
  const result = await getArticleList(req.qurey)
  if(!result){
    res.json(new ErrorModel())
  }
  res.json(new SuccessModel(result))
})

module.exports = router;
