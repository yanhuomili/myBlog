var express = require('express');
var router = express.Router();

/* blog */
router.get('/list',function(req,res,next){
  let list=[
    {title:'title',id:1,text:'的说法是理发店设计费第三方文件人水电费水电费'},
    {title:'title',id:2,text:'的说法是理发店设计费第三方文件人水电费水电费'},
    {title:'title',id:3,text:'的说法是理发店设计费第三方文件人水电费水电费'},
  ]
  res.send(JSON.stringify(list))
})

module.exports = router;
