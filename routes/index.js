//Created by: Jiye Yu - Student Nr.:301116244 Created on Oct 09, 2020
//COMP229_assignment1_301116244 Jiye Yu

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
router.get('/projects', function(req, res, next){
  res.render('projects', { title: 'Projects'});
});

/*Get services page. */
router.get('/services', function(req, res, next){
  res.render('services', { title: 'Services', message: 'We are offering:'});
});

/*Get about page. */
router.get('/about', function(req, res, next){
  res.render('about', { title: 'About Me'});
});

/*Get contact page. */
router.get('/contact', function(req, res, next){
  res.render('contact', { title: 'Contact Me', message: 'Contact Me' });
});
module.exports = router;
