"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var sinon_1 = require("sinon");
var React = require("react");
var enzyme_1 = require("enzyme");
var WidgetFrame_1 = require("../../lib/components/WidgetFrame");
var DefaultFrame_1 = require("../../lib/components/DefaultFrame");
var TestCustomFrame_1 = require("../fake/TestCustomFrame");
var ContainerWithDndContext_1 = require("../fake/ContainerWithDndContext");
describe('<WidgetFrame />', function () {
    it('Default frame should be used when customized frame is not provided', function () {
        var onAdd = sinon_1.spy();
        var layout = {};
        var rowIndex = 1;
        var columnIndex = 2;
        var OriginalWidgetFrame = WidgetFrame_1.default.DecoratedComponent;
        var identity = function (el) { return el; };
        var component = enzyme_1.mount(React.createElement(ContainerWithDndContext_1.default, null,
            React.createElement(OriginalWidgetFrame, { layout: layout, rowIndex: rowIndex, columnIndex: columnIndex, onAdd: onAdd, editable: true, connectDragSource: identity, connectDropTarget: identity })));
        chai_1.expect(component.find(DefaultFrame_1.default)).to.have.length(1);
    });
    it('DefaultFrame should be provided with necessary props', function () {
        var children = [];
        var editable = false;
        var onRemove = function () { };
        var title = 'Widget Title';
        var OriginalWidgetFrame = WidgetFrame_1.default.DecoratedComponent;
        var identity = function (el) { return el; };
        var component = enzyme_1.mount(React.createElement(ContainerWithDndContext_1.default, null,
            React.createElement(OriginalWidgetFrame, { children: children, editable: editable, onRemove: onRemove, title: title, connectDragSource: identity, connectDropTarget: identity })));
        chai_1.expect(component.find(DefaultFrame_1.default).first().prop('children')).to.equal(children);
        chai_1.expect(component.find(DefaultFrame_1.default).first().prop('editable')).to.equal(editable);
        chai_1.expect(component.find(DefaultFrame_1.default).first().prop('title')).to.equal(title);
    });
    it('DefaultFrame onRemove should be called when close is clicked', function () {
        var children = [];
        var editable = false;
        var onRemove = sinon_1.spy();
        var title = 'Widget Title';
        var layout = {
            rows: [{
                    columns: [{
                            className: 'col-md-4',
                            widgets: [{ name: 'HelloWorld' }],
                        }],
                }],
        };
        var OriginalWidgetFrame = WidgetFrame_1.default.DecoratedComponent;
        var identity = function (el) { return el; };
        var component = enzyme_1.mount(React.createElement(ContainerWithDndContext_1.default, null,
            React.createElement(OriginalWidgetFrame, { layout: layout, rowIndex: 0, columnIndex: 0, widgetIndex: 0, children: children, editable: editable, onRemove: onRemove, title: title, connectDragSource: identity, connectDropTarget: identity })));
        component.find('a').simulate('click');
        chai_1.expect(onRemove.calledWithExactly({
            rows: [{
                    columns: [{
                            className: 'col-md-4',
                            widgets: [],
                        }],
                }],
        })).to.equal(true);
    });
    it('Customized frame should be used if provided', function () {
        var onAdd = sinon_1.spy();
        var layout = {};
        var rowIndex = 1;
        var columnIndex = 2;
        var OriginalWidgetFrame = WidgetFrame_1.default.DecoratedComponent;
        var identity = function (el) { return el; };
        var component = enzyme_1.mount(React.createElement(ContainerWithDndContext_1.default, null,
            React.createElement(OriginalWidgetFrame, { layout: layout, rowIndex: rowIndex, columnIndex: columnIndex, onAdd: onAdd, editable: true, frameComponent: TestCustomFrame_1.default, connectDragSource: identity, connectDropTarget: identity })));
        chai_1.expect(component.find(TestCustomFrame_1.default)).to.have.length(1);
    });
    it('Customized frame should be provided with necessary props', function () {
        var children = [];
        var editable = false;
        var onRemove = function () { };
        var title = 'Widget Title';
        var OriginalWidgetFrame = WidgetFrame_1.default.DecoratedComponent;
        var identity = function (el) { return el; };
        var component = enzyme_1.mount(React.createElement(ContainerWithDndContext_1.default, null,
            React.createElement(OriginalWidgetFrame, { children: children, editable: editable, onRemove: onRemove, title: title, frameComponent: TestCustomFrame_1.default, connectDragSource: identity, connectDropTarget: identity })));
        chai_1.expect(component.find(TestCustomFrame_1.default).first().prop('children')).to.equal(children);
        chai_1.expect(component.find(TestCustomFrame_1.default).first().prop('editable')).to.equal(editable);
        chai_1.expect(component.find(TestCustomFrame_1.default).first().prop('title')).to.equal(title);
    });
});
//# sourceMappingURL=WidgetFrame.spec.js.map