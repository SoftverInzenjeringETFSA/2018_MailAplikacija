var express = require('express');
var router = express.Router();

var account_controller = require('../controllers/accountController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// POST request for creating Author.
router.post('/account/add', account_controller.account_add_post);

module.exports = router;
