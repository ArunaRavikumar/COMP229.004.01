/* File name: Home file 
Name: Aruna Ravi Kumar
ID: 301243154
Date: 06-04-2022
*/


var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/',function(req, res, next) {
  res.render('index', { 
    title: 'Aruna Portfolio',
    home: 'HOME',
    about: 'ABOUT ME',
    projects: 'PROJECTS',
    service: 'SERVICE PAGE',
    contact:'CONTACT ME'
  });
});
// get about page
router.get('/', about);
function about(req, res, next) {
  res.render('index', { 
    title: 'Aruna Portfolio',
    home: 'HOME',
    about: 'ABOUT ME',
    projects: 'PROJECTS',
    service: 'SERVICE PAGE',
    contact:'CONTACT ME'
  });
}
// get projects page
router.get('/', projects);
function projects(req, res, next) {
  res.render('index', { 
    title: 'Aruna Portfolio',
    home: 'HOME',
    about: 'ABOUT ME',
    projects: 'PROJECTS',
    service: 'SERVICE PAGE',
    contact:'CONTACT ME'
  });
}
// get service page
router.get('/', service);
function service(req, res, next) {
  res.render('index', { 
    title: 'Aruna Portfolio',
    home: 'HOME',
    about: 'ABOUT ME',
    projects: 'PROJECTS',
    service: 'SERVICE PAGE',
    contact:'CONTACT ME'
  });
}
// get contact page
router.get('/',function(req, res, next) {
  res.render('contact', { 
    title: 'Aruna Portfolio',
    home: 'HOME',
    about: 'ABOUT ME',
    projects: 'PROJECTS',
    service: 'SERVICE PAGE',
    contact:'CONTACT ME'
  });
});

module.exports = router;
