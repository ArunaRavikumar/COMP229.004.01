var express = require('express');
var router = express.Router();

/* GET service page. */
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
