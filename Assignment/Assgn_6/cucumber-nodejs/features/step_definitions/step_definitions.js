var assert = require('assert');
var { By, until } = require('selenium-webdriver');
var seleniumWebdriver = require('selenium-webdriver');
var { defineSupportCode } = require("cucumber");

defineSupportCode(function ({ Given, When, Then }) {
    Given('I launch mywipro url', function () {
        return this.driver.get("https://mywipro.wipro.com");
    });

    When('I select Wipro Limited option', function () {
        return this.driver.findElement(seleniumWebdriver.By.xpath("//span[text()='Wipro Limited']")).click();
    });

    When('I verify title of the page', function () {
        return this.driver.getTitle().then(function (title) {
            var expectedTitle = 'Sign In';
            if (expectedTitle === title) {
                console.log("Verification Successful - The correct title is displayed on the web page.");
            }
            else {
                console.log("Verification Failed - An incorrect title is displayed on the web page.");
            }
        });
    });

    When('I enter invalid login details', function () {
        this.driver.findElement(seleniumWebdriver.By.id('userNameInput')).sendKeys("maha@wipro.com");
        this.driver.findElement(seleniumWebdriver.By.id('passwordInput')).sendKeys("****");
        return this.driver.findElement(seleniumWebdriver.By.id('submitButton')).click();
    });

    Then('I should see the error message', function () {
        return this.driver.findElement(seleniumWebdriver.By.id('errorText')).getText().then(function (actErrMsg) {
            var expErrMsg = 'Login Failed !! If your Wipro AD ID is JK123456 then login ID would be JK123456@wipro.com';
            if (expErrMsg === actErrMsg) {
                console.log("Verification Successful - The correct error message is displayed on the web page.");
            }
            else {
                console.log("Verification Failed - An incorrect error message is displayed on the web page.");
            }
        });
    });
});

