var {chrome,Options}=require('selenium-webdriver/chrome');
var seleniumWebdriver = require('selenium-webdriver');
var { defineSupportCode } = require("cucumber");

function CustomWorld() {
  this.driver = new seleniumWebdriver.Builder().forBrowser("chrome").build();
}

defineSupportCode(function({ setDefaultTimeout,setWorldConstructor }) {
  setWorldConstructor(CustomWorld);
  setDefaultTimeout(60*1000);
});
