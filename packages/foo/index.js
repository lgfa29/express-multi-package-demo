var express = require('express');
var router = express.Router();

router.get('/foo', function(req, res) {
  res.render('foo/foo');
});

module.exports = router;
