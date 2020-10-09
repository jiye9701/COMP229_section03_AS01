var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/*Get home page. */
router.get('/home', function(req, res, next){
  res.render('index', { title: 'Home'});
});

/*Get home page. */
router.get('/products', function(req, res, next){
  res.render('index', { title: 'Products'});
});

/*Get services page. */
router.get('/services', function(req, res, next){
  res.render('index', { title: 'Services'});
});

/*Get about page. */
router.get('/about', function(req, res, next){
  res.render('index', { title: 'About'});
});

/*Get contact page. */
router.get('/contact', function(req, res, next){
  res.render('index', { title: 'Contact'});
});
module.exports = router;
