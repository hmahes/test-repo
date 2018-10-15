var callissues = require('../datasource/callissues');
var express = require('express');
var router = express.Router();
var dateFormat = require('dateformat');
var day=dateFormat(new Date(), "dd-mm-yyyy");

router.get('/', function (req, res) {
  callissues.getAllIssues(function (err, items) {
    res.render('views/index', { title: 'My Issue tracker', issues: items })
  });
});

router.get('/add', function (req, res) {
  res.render('operations/add', { title: 'Add Issue'});
});

router.post('/add', function (req, res) {
  var issue = {};
  issue.description = req.body.description;
  issue.severity = req.body.severity;
  issue.createddate = day;
  issue.status = "Open";
  callissues.saveIssue(issue, function (err, issue) {
    res.redirect('/');
  });
});

router.get('/update/:id', function (req, res) {
  callissues.getIssueById(req.params.id, function (err, issue) {

    res.render('operations/update', { title: 'Update Issue', issue: issue });
  });
});

router.post('/update/:id', function (req, res) {
  var updatedIssue = {};
  updatedIssue.description = req.body.description;
  updatedIssue.severity = req.body.severity;
  updatedIssue.status = req.body.status;
  updatedIssue.createddate = day;
  updatedIssue.resolveddate = req.body.resolveddate;
  callissues.updateIssueById(req.params.id, updatedIssue, function (err) {
    res.redirect('/');
  });
});

router.get('/delete/:id', function (req, res) {
  callissues.deleteIssueById(req.params.id, function (err) {
    res.redirect('/');
  });
});

module.exports = router;
