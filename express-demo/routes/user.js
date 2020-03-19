var express = require('express');
var router = express.Router();

/* GET user listing. */
router.get('/login',function(req,res,_next){
  console.log(1)
  console.log(2)
  const {userName,password} = req.query
  console.log(req.query)
  let userInfo={
      userName,
      password,
      code: 0
  }
  res.json(userInfo)
})

module.exports = router;
