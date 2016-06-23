// spec.js
var Calculator = require('./Calculator.js');
var aUtils = require('../utils/assertionUtils.js');

describe('Calculator Demo', function() {
    var cal = new Calculator();

    beforeEach(function () {
        cal.loadCalculator();
    });

    it('Validating plus operator', function () {
        cal.setFirstNum('9');
        cal.setSecondNum('8');
        cal.setOperator('+');
        cal.executeCalculation();

        aUtils.assertString(cal.getResult(),'17');
    });

    it('Validating multiply operator', function(){
        cal.setFirstNum('99');
        cal.setSecondNum('3');
        cal.setOperator('*');
        cal.executeCalculation();

        aUtils.assertString(cal.getResult(),'297');
    })
});