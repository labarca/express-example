var express = require('express');
var router = express.Router();

var userController = require('../userController');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.route('/')
    .get(userController.index)
    .post(userController.new);

module.exports = router;
