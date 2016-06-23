/**
 * Created by michaelho on 6/20/2016.
 */
var ebUtils = require('../utils/elementBuilderUtils.js');

var History = function(){
    var historyList = ebUtils.buildAllElementByRepeater('result in memory');

    this.countHistoryList = function () {
        return historyList.count();
    };

    this.getFirstItemInHistoryList = function(){
        return historyList.first().getText();
    };

    this.getLastItemInHistoryList = function(){
        return historyList.last().getText();
    };
};

module.exports = History;