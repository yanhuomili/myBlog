var express = require('express');
var router = express.Router();

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

module.exports = router;
