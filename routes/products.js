var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/all', function(req, res, next) {
  res.send('get all product');
});

router.delete('/delete', function(req, res, next) {
  res.send('delete product');
});

module.exports = router;
