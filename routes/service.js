var express = require('express');
var router = express.Router();

/* GET projects page. */
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
/* GET about page. */
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
/* GET service page. */
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
