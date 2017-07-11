"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var React = require("react");
var enzyme_1 = require("enzyme");
var sinon_1 = require("sinon");
var AddWidget_1 = require("../../lib/components/AddWidget");
describe('<AddWidget />', function () {
    it('Should render the children', function () {
        var widgetText = 'Add new widget yo!';
        var component = enzyme_1.shallow(React.createElement(AddWidget_1.default, { text: widgetText }));
        chai_1.expect(component.find('a').first().text()).to.equal(widgetText);
    });
    it('Should use the default text when text is not provided', function () {
        var component = enzyme_1.shallow(React.createElement(AddWidget_1.default, null));
        chai_1.expect(component.find('a').first().text()).to.equal('Add Widget');
    });
    it('Should call onClick when clicked', function () {
        var onClick = sinon_1.spy();
        var component = enzyme_1.shallow(React.createElement(AddWidget_1.default, { onClick: onClick }));
        component.find('div').simulate('click');
        chai_1.expect(onClick.calledOnce).to.equal(true);
    });
});
//# sourceMappingURL=AddWidget.spec.js.map