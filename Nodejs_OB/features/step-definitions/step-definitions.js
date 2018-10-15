const { Given, When, Then } = require('cucumber');

Given('I set the Authentication details', function () {
    return this.setAuth();
});

Given('I set the Authentication details and the Interaction Id', function () {
    return this.setAuthInter();
});

Given('I set the invalid Authentication details', function () {
    return this.setInvalidAuth();
});

When('I make a GET request to Payment {string}', function (path) {
    return this.getPayCall(path);
});

When('I make a GET request to Payment Submission {string}', function (path) {
    return this.getPaySubCall(path);
});

Then('I should get a response status code as {int} {string}', function (expectedStatusCode, expectedStatusMessage) {
    return this.resStatus(expectedStatusCode, expectedStatusMessage);
});

Then('I should get a response error status code as {int} {string}', function (expectedErrStatusCode, expectedErrStatusMessage) {
    return this.resErrStatus(expectedErrStatusCode, expectedErrStatusMessage);
});

Then('I should get a response interaction id as {string}', function (expectedInteractionId) {
    return this.resInterId(expectedInteractionId);
});

Then('it should have the field {string} containing the value {string}', function (attributes, expectedValue) {
    return this.resContent(attributes, expectedValue);
});

Then('I should get a response field {string} containing the value {string}', function (attributes_ps, expectedValue_ps) {
    return this.resContent_ps(attributes_ps, expectedValue_ps);
});

