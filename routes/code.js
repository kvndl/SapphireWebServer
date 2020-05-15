var express = require('express');
var router = express.Router();

/* GET code page. */
router.get('/', function(req, res, next) {
  res.render('code', { title: 'CODE PAGE' });
});

module.exports = router;