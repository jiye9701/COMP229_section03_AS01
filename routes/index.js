//Created by: Jiye Yu - Student Nr.:301116244 Created on Oct 09, 2020
//COMP229_assignment1_301116244 Jiye Yu

let express = require('express');
let router = express.Router();

let mongoose = require('mongoose');

let Component = require('../models/component');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome Home' });
});

/*Get home page. */
router.get('/home', function(req, res, next){
  res.render('index', { title: 'Home'});
});

/*Get projects page. */
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
  res.render('contact', { title: 'Contact', message: 'Contact Me' });
});




module.exports = router;
