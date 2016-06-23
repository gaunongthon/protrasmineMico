/**
 * Created by michaelho on 6/21/2016.
 */
module.exports = {
    framework: 'jasmine2',
    baseURLAngular: 'http://www.angularjs.org', 
    baseURLCalculator: 'http://juliemr.github.io/protractor-demo',
    multiCapabilities: [{
        browserName: 'firefox'
    }],
    screenshotFolder: 'test/screenshots/',
    //Sauce Labs
    accessKeySauceLabs: '33ba574f-d98a-4fdf-8236-9f2e84dbcc10',
    userNameSauceLabs: 'michaelho',
    //Browser Stack
    accessKeyBrowserStack: 'gzo9jQZzcWJytvP2cBj8',
    userNameBrowserStack: 'michaelho15',
    //Waiting for page to load
    getPageTimeout: 10000,
};
