/**
 * Created by michaelho on 6/22/2016.
 */
var env = require('../../.././properties.js');

module.exports = {
    assertString: function (actualResult, expectedResult) {
        return expect(actualResult).toEqual(expectedResult);
    },

    assertNumber: function (actualNumber, expectedNumber) {
        return expect(actualNumber).toEqual(expectedNumber);
    },

    assertStringContainsString: function (actualString, subString) {
        return expect(actualString).toContain(subString);
    }
}