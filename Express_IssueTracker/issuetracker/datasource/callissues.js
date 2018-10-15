"use strict";

var Issues = require('./issues').issues;
var _ = require('lodash');

var currentID = 2;
var jsondata = function(item) {
	return JSON.parse(JSON.stringify(item));
};

var callissues = {
	getAllIssues: function(callback) {
		callback(null, jsondata(Issues));
	},
  getIssueById: function(id, callback) {
		var issue = _.find(Issues, {id: parseInt(id)});
		callback (null, jsondata(issue));
  },
  updateIssueById: function(id, Issue, callback) {
			var existingIssueIndex = _.indexOf(Issues, _.find(Issues, {id: parseInt(id)}));
			Issue.id = parseInt(id);
			Issues.splice(existingIssueIndex, 1, Issue);
			callback (null);
  },
	saveIssue: function(Issue, callback) {
		currentID = currentID + 1;
    Issue.id = currentID;
    Issues.push(Issue);
		callback(null, jsondata(Issue));
	},
	deleteIssueById: function(id, callback) {
		_.remove(Issues, { id: parseInt(id)});
    callback(null);
	}
};

module.exports = callissues;
