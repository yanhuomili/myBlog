var express = require('express');
var router = express.Router();
const {login} = require('../controller/user')
const {SuccessModel,ErrorModel} = require('../model/httpResModel')

/* GET user listing. */
router.get('/login',async function(req,res,_next){
  const {username,password} = req.query
  const result = await login(username,password)
  if(result&&result[0].username){
    /* 登录之后把用户信息放到session里面 */
    req.session.username=result[0].username
    res.json(new SuccessModel('登录成功'))
    return
  }
  return new ErrorModel('登录失败')
})

module.exports = router;
