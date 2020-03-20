const {ErrorModel} = require('../model/httpResModel')
module.exports = (req,res,next)=>{
  console.log(req.session,'登录校验中间件')
  if(req.session.username){
    next()
    return
  }
  res.json(new ErrorModel('用户未登录'))
}