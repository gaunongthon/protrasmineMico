/**
 * Created by michaelho on 6/20/2016.
 */
var ebUtils = require('../utils/elementBuilderUtils.js');
var env = require('../../.././properties.js');

var Calculator = function () {
    var firstNum = ebUtils.buildElementByModel('first');
    var secondNum = ebUtils.buildElementByModel('second');
    var operator = ebUtils.buildElementByModel('operator');
    var goButton = ebUtils.buildElementById('gobutton');
    var latestResult = ebUtils.buildElementByBinding('latest');

    this.loadCalculator = function(){
        browser.get(env.baseURLCalculator);
    };
    
    this.setFirstNum = function (num){
        firstNum.sendKeys(num);
    };

    this.setSecondNum = function (num){
        secondNum.sendKeys(num);
    };

    this.setOperator = function (op){
        operator.sendKeys(op);
    };

    this.executeCalculation = function(){
        goButton.click();
    };

    this.getResult = function(){
        return latestResult.getText();
    };
};

module.exports = Calculator;