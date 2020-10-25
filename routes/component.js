let express = require('express');
let router = express.Router();

let mongoose = require('mongoose');

let Component = require('../models/component');


/*GET Component-list page. */
router.get('/component-list', function(req, res, next){
    Component.Model.find ( (err, data) => {
      if(err)
      {
        console.error(err);
        res.end()
      }
      
    //console.table(data,'partID', 'name', 'description', 'price')
    //console.log(data);

  
  res.render('component', { title: 'Component List', components: data});
  });
  
});



  /* GET Add page Create*/
  router.get('/add', (req, res, next) =>
  {
    res.render('component', { title: 'Add component'});
  });
  /* POST preocess the Add page */
  router.get('/add', (req, res, next) =>
  {

  });


  /* GET Edit page Update*/
  router.get('/edit/:id', (req, res, next) =>
  {

  });
  /*Post proccess the Edit page */
  router.get('/edit/:id', (req, res, next) =>
  {

  });


  /*Get process the Delete page Delete*/
  router.get('/delete/:id', (req, res, next) =>
  {

  });
  
module.exports = router;