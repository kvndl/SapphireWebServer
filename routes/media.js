var express = require('express');
var router = express.Router();

/* GET media page. */
router.get('/', function(req, res, next) {
  res.render('media', { title: 'MEDIA PAGE' });
});

module.exports = router;