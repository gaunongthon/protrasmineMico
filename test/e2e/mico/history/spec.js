/**
 * Created by michaelho on 6/20/2016.
 */
// spec.js
var History = require('./History.js');
var Calculator = require('../calculator/Calculator.js');
var aUtils = require('../utils/assertionUtils.js');

describe('History Demo ', function() {
    var cal = new Calculator();
    
    function doFunction(num1, num2, oper) {
        cal.setFirstNum(num1);
        cal.setSecondNum(num2);
        cal.setOperator(oper);
        cal.executeCalculation();
    }

    beforeEach(function() {
        cal.loadCalculator();
    });

    it('should have history', function(){

        var hist = new History();
        doFunction('1','2','+');

        aUtils.assertNumber(hist.countHistoryList(), 1);
        aUtils.assertStringContainsString(hist.getFirstItemInHistoryList(),'M');

        doFunction('4','4','*');
        aUtils.assertNumber(hist.countHistoryList(), 2);
        aUtils.assertStringContainsString(hist.getLastItemInHistoryList(),'M');

        doFunction('9','1','-');
        aUtils.assertNumber(hist.countHistoryList(), 3);
        aUtils.assertStringContainsString(hist.getLastItemInHistoryList(),'M');

        doFunction('8','2','/');
        aUtils.assertNumber(hist.countHistoryList(), 4);
        aUtils.assertStringContainsString(hist.getLastItemInHistoryList(),'M');
    });
});