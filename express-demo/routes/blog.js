var express = require('express');
var router = express.Router();
const {SuccessModel,ErrorModel} = require('../model/httpResModel')
const {addArticle} = require('../controller/blog')


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

module.exports = router;
