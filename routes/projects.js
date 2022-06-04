var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/',function(req, res, next) {
  res.render('projects', { 
    title: 'Aruna Portfolio',
    home: 'HOME',
    about: 'ABOUT ME',
    projects: 'PROJECTS',
    service: 'SERVICE PAGE',
    contact:'CONTACT ME'
  });
});
/* GET home page. */
router.get('/',function(req, res, next) {
  res.render('about', { 
    title: 'Aruna Portfolio',
    home: 'HOME',
    about: 'ABOUT ME',
    projects: 'PROJECTS',
    service: 'SERVICE PAGE',
    contact:'CONTACT ME'
  });
});
// get service page
/* GET home page. */
router.get('/',function(req, res, next) {
  res.render('service', { 
    title: 'Aruna Portfolio',
    home: 'HOME',
    about: 'ABOUT ME',
    projects: 'PROJECTS',
    service: 'SERVICE PAGE',
    contact:'CONTACT ME'
  });
});
module.exports = router;
