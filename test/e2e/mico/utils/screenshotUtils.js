/**
 * Created by michaelho on 6/21/2016.
 */
var fs = require('fs');
var env = require('../../.././properties.js');

function writeScreenShot(data, filename) {
    var stream = fs.createWriteStream(filename);
    stream.write(new Buffer(data, 'base64'));
    stream.end();
}

module.exports = {
    takeScreenShot: function (filename) {
        browser.takeScreenshot().then(function (png) {
            writeScreenShot(png, env.screenshotFolder + filename + '.png');
        });
    }
}