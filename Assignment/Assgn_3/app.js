const soapRequest = require('easy-soap-request');
const fs = require('fs');
var assert = require('assert');

const url = 'http://127.0.0.1:8088/mockServiceSoapBinding';
const headers = {
    'user-agent': 'sampleTest',
    'Content-Type': 'application/soap+xml',
    'charset': 'UTF-8',
    'soapAction': 'http://www.soapui.org/sample/login',
};
const xml = fs.readFileSync('mocktest.xml', 'utf-8');

(async () => {
    const { response } = await soapRequest(url, headers, xml);
    const { body, statusCode } = response;

    console.log(body);

    //get value from response xml
    var re = new RegExp("<sam:loginFault>(.*?)</sam:loginFault>", "gmi");
    while (res = re.exec(body)) {
        var actNodeValue = res[1];
    };
    try {
        //Assert the response status code and userId
        var expStatus = statusCode;
        var expNodeValue = "The specified credentials are already logged in";

        assert.equal(200, expStatus, "Status code expected to be 200 OK");
        assert.ok(expNodeValue == actNodeValue, "Expected value of <sam:loginFault>");
    } catch (err) {
        console.log(err)
    };
})();
