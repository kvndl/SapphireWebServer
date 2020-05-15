var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'NPS' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'ABOUT PAGE' });
});

/* GET code page. */
router.get('/code', function(req, res, next) {
  res.render('code', { title: 'CODE PAGE' });
});

router.get('/media', function(req, res, next) {
  res.render('media', { title: 'MEDIA PAGE' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'CONTACT PAGE' });
});

/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'LOGIN PAGE' });
});

module.exports = router;