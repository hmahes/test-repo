var express = require('express');
var router = express.Router();
var callissues = require('../datasource/callissues');


/* GET home page. */
router.get('/', function(req, res, next) {
  callissues.getAllIssues(function(err, items) {
    res.render('operations/index', {title: 'My Issue tracker', issues: items})
	});
});

module.exports = router;
