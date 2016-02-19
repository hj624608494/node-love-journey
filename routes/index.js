var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var listDatas = [1,2,3,4,5];
  res.render('test', { title: 'ejs' , list: listDatas});
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

/**
 * login
 */
router.post('/index/login', function(req, res, next) {
	var postData = req.body;
	if (postData.username == '123' && postData.password == '123') {
		res.send({
			ret: true
		})
	}else{
		res.send({
			ret: false
		})
	}
	// console.log(res);
	// console.log(next);
});

module.exports = router;
