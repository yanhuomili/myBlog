var express = require('express');
var router = express.Router();
const userRouter = require('./user')
const blogRouter = require('./blog')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
