/**
 * Created by michaelho on 6/21/2016.
 */
var sUtils = require('../utils/screenshotUtils.js');
var aUtils = require('../utils/assertionUtils.js');
var env = require('../../.././properties.js');

describe('Step 0 - just write a test', function () {

    it('a page should have a title', function () {
        browser.get(env.baseURLCalculator);
        //take screenshot
        sUtils.takeScreenShot('SuperCalculator')
        //assert
        aUtils.assertString(browser.getTitle(), 'Super Calculator');
    })

})
