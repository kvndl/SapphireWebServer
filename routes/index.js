var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'NPS'
    });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
    res.render('about', {
        title: 'ABOUT'
    });
});

/* GET code page. */
router.get('/code', function(req, res, next) {
    res.render('code', {
        title: 'CODE PAGE'
    });
});

/* GET media page. */
router.get('/media', function(req, res, next) {
    res.render('media', {
        title: 'MEDIA PAGE'
    });
});

/* GET secret page. */
router.get('/secret', function(req, res, next) {
    res.render('secret');
});

module.exports = router;