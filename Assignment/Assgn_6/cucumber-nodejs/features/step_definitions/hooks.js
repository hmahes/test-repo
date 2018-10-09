var { defineSupportCode } = require("cucumber");

defineSupportCode(function ({ After, Before }) {
    After(function () {
        return this.driver.quit();
    });
});
