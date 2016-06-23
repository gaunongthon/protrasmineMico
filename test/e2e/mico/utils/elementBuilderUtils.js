/**
 * Created by michaelho on 6/22/2016.
 */
module.exports = {
    buildElementByModel: function (model) {
        return element(by.model(model));
    },
    
    buildElementByBinding: function (binding) {
        return element(by.binding(binding));
    },
    
    buildElementById: function (id) {
        return element(by.id(id));
    },
    
    buildAllElementByRepeater: function (repeater){
        return element.all(by.repeater(repeater));
    },
};