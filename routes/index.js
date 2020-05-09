var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'NPS', message: 'Wow, it works! Again!' });
});

module.exports = router;
