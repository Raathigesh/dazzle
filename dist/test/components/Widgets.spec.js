"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var React = require("react");
var enzyme_1 = require("enzyme");
var Widgets_1 = require("../../lib/components/Widgets");
var WidgetFrame_1 = require("../../lib/components/WidgetFrame");
var TestComponent_1 = require("../fake/TestComponent");
describe('<Widgets />', function () {
    it('Should render widgets with widget frames', function () {
        var widgets = [{ key: 'HelloWorld' }];
        var widgetTypes = {
            HelloWorld: {
                type: TestComponent_1.default,
                title: 'Sample Hello World App',
            },
        };
        var component = enzyme_1.shallow(React.createElement(Widgets_1.default, { widgets: widgets, widgetTypes: widgetTypes }));
        chai_1.expect(component.find(WidgetFrame_1.default)).to.have.length(1);
    });
    it('Should pass the properties to WidgetFrame', function () {
        var widgets = [{ key: 'HelloWorld' }];
        var widgetTypes = {
            HelloWorld: {
                type: TestComponent_1.default,
                title: 'Sample Hello World App',
            },
        };
        var layout = {};
        var columnIndex = 5;
        var rowIndex = 6;
        var widgetIndex = 0;
        var editable = false;
        var onRemove = function () { };
        var component = enzyme_1.shallow(React.createElement(Widgets_1.default, { widgets: widgets, widgetTypes: widgetTypes, layout: layout, columnIndex: columnIndex, rowIndex: rowIndex, widgetIndex: widgetIndex, editable: editable, onRemove: onRemove }));
        chai_1.expect(component.find(WidgetFrame_1.default).at(0).prop('title')).to.equal('Sample Hello World App');
        chai_1.expect(component.find(WidgetFrame_1.default).at(0).prop('layout')).to.equal(layout);
        chai_1.expect(component.find(WidgetFrame_1.default).at(0).prop('columnIndex')).to.equal(columnIndex);
        chai_1.expect(component.find(WidgetFrame_1.default).at(0).prop('rowIndex')).to.equal(rowIndex);
        chai_1.expect(component.find(WidgetFrame_1.default).at(0).prop('widgetIndex')).to.equal(widgetIndex);
        chai_1.expect(component.find(WidgetFrame_1.default).at(0).prop('editable')).to.equal(editable);
        chai_1.expect(component.find(WidgetFrame_1.default).at(0).prop('onRemove')).to.equal(onRemove);
    });
    it('Frame should have the actual widget as children', function () {
        var widgets = [{ key: 'HelloWorld' }];
        var widgetTypes = {
            HelloWorld: {
                type: TestComponent_1.default,
                title: 'Sample Hello World App',
            },
        };
        var component = enzyme_1.shallow(React.createElement(Widgets_1.default, { widgets: widgets, widgetTypes: widgetTypes }));
        chai_1.expect(component.find(WidgetFrame_1.default).first().childAt(0).type()).to.equal(TestComponent_1.default);
    });
});
//# sourceMappingURL=Widgets.spec.js.map