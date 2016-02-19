var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/index', function(req, res, next) {
  res.render('index/index', { title: 'Express/index' });
});


router.get('/index/good', function(req, res, next) {
  res.render('index/good', { title: '商品' });
});


router.get('/index/slider', function(req, res, next) {
  res.render('index/slider', { title: '商品' });
});


router.get('/index/waist', function(req, res, next) {
  res.render('index/waist', { title: '商品' });
});

module.exports = router;
