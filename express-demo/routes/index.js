var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/session-test',function(req,res){
  const session = req.session
  console.log(session,'session')
  if(session.visitNum == null){
        session.visitNum = 0
      }
      session.visitNum +=1
  if(session.username){
    res.json({
      code:0,
      session:session.visitNum,
      message:'用户已登录'
    })
  }else{
    res.json({
      code:-1,
      session:session.visitNum,
      message:'用户未登录'
    })
  }
})

// router.get('/session-test',function(req,res){
//   const session = req.session
//   if(session.visitNum == null){
//     session.visitNum = 0
//   }
//   session.visitNum +=1
//   res.json({
//     visitNum:session.visitNum
//   })
// })

module.exports = router;
