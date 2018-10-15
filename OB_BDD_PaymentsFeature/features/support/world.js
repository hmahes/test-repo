var { setWorldConstructor } = require('cucumber');
var request = require('request');
var assert = require('assert');
var uuid = require('uuid-v4');
var log4js = require('log4js');
var log = log4js.getLogger();
log.level = 'info';
var baseUrl = "http://localhost:8001/open-banking/v1.1/";
var headers;
var attr;
var expectedVal;
var attr_ps;
var expectedVal_ps;
var expectedSC;
var expectedSM;
var expectedErrSC;
var expectedErrSM;
var expectedInterId;

function CustomWorld() {
    this.setAuth = function () {
        headers = {
            'Authorization': 'Bearer 2YotnFZFEjr1zCsicMWpAA',
            'x-fapi-financial-id': 'bbbUB4fPIYB0k1m'
        }
    }

    this.setAuthInter = function () {
        headers = {
            'Authorization': 'Bearer 2YotnFZFEjr1zCsicMWpAA',
            'x-fapi-financial-id': 'bbbUB4fPIYB0k1m',
            'x-fapi-interaction-id': 'bbbUB4fPI'
        }
    }

    this.setInvalidAuth = function () {
        headers = {
            'Authorization': 'Bearer',
            'x-fapi-financial-id': 'bbbUB4fPIYB0k1m'
        }
    }

    this.getPayCall = function (path) {
        var endPoint = (baseUrl + path);
        var options = {
            url: endPoint,
            method: 'GET',
            headers: headers
        }
        request(options, function (error, response, body) {
            try {
                if (!error && response.statusCode == 200 && response.headers['x-fapi-interaction-id'] != 'bbbUB4fPI') {
                    var actualVal;
                    var actualSC = response.statusCode;
                    var actualSM = response.statusMessage
                    assert.equal(actualSC, expectedSC);
                    assert.equal(actualSM, expectedSM);
                    switch (attr) {
                        case "PaymentId":
                            actualVal = JSON.parse(body).Data.PaymentId;
                            if (uuid.isUUID(actualVal)) {
                                assert.equal("true", expectedVal);
                            }
                            else {
                                assert.equal(actualVal, expectedVal);
                            }
                            break;
                        case "PaymentSubmissionId":
                            actualVal = JSON.parse(body).Data.PaymentSubmissionId;
                            assert.equal(actualVal, expectedVal);
                            break;
                        case "Status":
                            actualVal = JSON.parse(body).Data.Status;
                            assert.equal(actualVal, expectedVal);
                            break;
                        case "InstructionIdentification":
                            actualVal = JSON.parse(body).Data.Initiation.InstructionIdentification;
                            assert.equal(actualVal, expectedVal);
                            break;
                        case "EndToEndIdentification":
                            actualVal = JSON.parse(body).Data.Initiation.EndToEndIdentification;
                            assert.equal(actualVal, expectedVal);
                            break;
                        case "Amount":
                            actualVal = JSON.parse(body).Data.Initiation.InstructedAmount.Amount;
                            assert.equal(actualVal, expectedVal);
                            break;
                        case "Currency":
                            actualVal = JSON.parse(body).Data.Initiation.InstructedAmount.Currency;
                            assert.equal(actualVal, expectedVal);
                            break;
                        case "SchemeName":
                            actualVal = JSON.parse(body).Data.Initiation.CreditorAccount.SchemeName;
                            assert.equal(actualVal, expectedVal);
                            break;
                        case "Identification":
                            actualVal = JSON.parse(body).Data.Initiation.CreditorAccount.Identification;
                            assert.equal(actualVal, expectedVal);
                            break;
                        case "Name":
                            actualVal = JSON.parse(body).Data.Initiation.CreditorAccount.Name;
                            assert.equal(actualVal, expectedVal);
                            break;
                        case "Self":
                            actualVal = JSON.parse(body).Links.Self;
                            assert.equal(actualVal, expectedVal);
                            break;
                        default:
                            log.info('Logger ## Failed to match the attribute value' + attr);
                            break;
                    }
                }
                else if (!error && response.statusCode == 200 && response.headers['x-fapi-interaction-id'] == 'bbbUB4fPI') {
                    var actualInterId = response.headers['x-fapi-interaction-id'];
                    assert.equal(actualInterId, expectedInterId);
                }
                else if (response.statusCode == expectedErrSC) {
                    var actualErrSC = response.statusCode;
                    var actualErrSM = response.statusMessage
                    assert.equal(actualErrSC, expectedErrSC);
                    assert.equal(actualErrSM, expectedErrSM);
                }
            }
            catch (err) {
                console.log('Error ==> ' + response.statusCode + ' ' + response.statusMessage);
                console.log(err.stack);
            }
        });
    }

    this.getPaySubCall = function (path) {
        var endPoint = (baseUrl + path);
        var options = {
            url: endPoint,
            method: 'GET',
            headers: headers
        }
        request(options, function (error, response, body) {
            try {
                if (!error && response.statusCode == 200 && response.headers['x-fapi-interaction-id'] != 'bbbUB4fPI') {
                    var actualVal_ps;
                    var actualSC = response.statusCode;
                    var actualSM = response.statusMessage
                    assert.equal(actualSC, expectedSC);
                    assert.equal(actualSM, expectedSM);
                    switch (attr_ps) {
                        case "PaymentId":
                            actualVal_ps = JSON.parse(body).Data.PaymentId;
                            if (uuid.isUUID(actualVal_ps)) {
                                assert.equal("true", expectedVal_ps);
                            }
                            break;
                        case "PaymentSubmissionId":
                            actualVal_ps = JSON.parse(body).Data.PaymentSubmissionId;
                            assert.equal(actualVal_ps, expectedVal_ps);
                            break;
                        case "Status":
                            actualVal_ps = JSON.parse(body).Data.Status;
                            assert.equal(actualVal_ps, expectedVal_ps);
                            break;
                        case "Self":
                            actualVal_ps = JSON.parse(body).Links.Self;
                            assert.equal(actualVal_ps, expectedVal_ps);
                            break;
                        default:
                            log.info('Logger ## Failed to match the attribute value' + attr);
                            break;
                    }
                }
                else if (!error && response.statusCode == 200 && response.headers['x-fapi-interaction-id'] == 'bbbUB4fPI') {
                    var actualInterId = response.headers['x-fapi-interaction-id'];
                    assert.equal(actualInterId, expectedInterId);
                }
                else if (response.statusCode == expectedErrSC) {
                    var actualErrSC = response.statusCode;
                    var actualErrSM = response.statusMessage
                    assert.equal(actualErrSC, expectedErrSC);
                    assert.equal(actualErrSM, expectedErrSM);
                }
            }
            catch (err) {
                console.log('Error ==> ' + response.statusCode + ' ' + response.statusMessage);
                console.log(err.stack);
            }
        });
    }


    this.resStatus = function (expectedStatusCode, expectedStatusMessage) {
        expectedSC = expectedStatusCode;
        expectedSM = expectedStatusMessage;
        log.info('Logger ## Expected response status ' + expectedSC + ' ' + expectedSM + ' is same as Actual response status');
    }

    this.resErrStatus = function (expectedErrStatusCode, expectedErrStatusMessage) {
        expectedErrSC = expectedErrStatusCode;
        expectedErrSM = expectedErrStatusMessage;
        log.info('Logger ## Expected error response status ' + expectedErrSC + ' ' + expectedErrSM + ' is same as Actual error response status ');
    }

    this.resInterId = function (expectedInteractionId) {
        expectedInterId = expectedInteractionId;
        log.info('Logger ## Expected InteractionId ' + expectedInterId + ' is same as Actual InteractionId');
    }

    this.resContent = function (attributes, expectedValue) {
        attr = attributes;
        expectedVal = expectedValue;
        log.info('Logger ## Assertion successful for the attribute ' + attr);
    }

    this.resContent_ps = function (attributes_ps, expectedValue_ps) {
        attr_ps = attributes_ps;
        expectedVal_ps = expectedValue_ps;
        log.info('Logger ## Assertion successful for the attribute ' + attr_ps);
    }

};
setWorldConstructor(CustomWorld);