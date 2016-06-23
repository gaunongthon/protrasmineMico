var env = require('./resources/properties.js');
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
  directConnect: true,
  framework: env.framework,
  suites: {
    misc: 'test/e2e/mico/misc/*spec.js',
    history: 'test/e2e/mico/history/spec.js',
    calculator: ['test/e2e/mico/calculator/spec.js']
  },
  multiCapabilities: env.multiCapabilities,
  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    showColors:true,
    defaultTimeoutInterval: 300000
  },
    onPrepare: function() {
    jasmine.getEnv().addReporter(
        new Jasmine2HtmlReporter({
            savePath: './test/reports/',
            filePrefix: 'MicoTestReport',
            fixedScreenshotName: true,
            takeScreenshots: true,
            screenshotsFolder: 'images',
            consolidate: true
            })
        );
    },
  /*
   To use remote browsers via Sauce Labs -----------------------------
   If sauceUser and sauceKey are specified, seleniumServerJar will be ignored.
   The tests will be run remotely using Sauce Labs.
  */
  sauceUser: env.userNameSauceLabs,
  sauceKey: env.accessKeySauceLabs,
  /*
   To use remote browsers via BrowserStack ---------------------------
   If browserstackUser and browserstackKey are specified, seleniumServerJar will be ignored.
   The tests will be run remotely using BrowserStack.
  */
  browserstackUser: env.userNameBrowserStack,
  browserstackKey: env.accessKeyBrowserStack,
};