"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var React = require("react");
var enzyme_1 = require("enzyme");
var Column_1 = require("../../lib/components/Column");
var Row_1 = require("../../lib/components/Row");
var Widgets_1 = require("../../lib/components/Widgets");
var TestComponent_1 = require("../fake/TestComponent");
var TestCustomFrame_1 = require("../fake/TestCustomFrame");
var ContainerWithDndContext_1 = require("../fake/ContainerWithDndContext");
function setup() {
    var columns = [{
            className: 'col-md-4 col-sm-6 col-xs-6',
            widgets: [{ key: 'HelloWorld' }],
        }, {
            className: 'col-md-4 col-sm-6 col-xs-6',
            widgets: [{ key: 'HelloWorld' }],
        }, {
            className: 'col-md-4 col-sm-6 col-xs-6',
            widgets: [{ key: 'HelloWorld' }],
        }];
    var widgets = {
        HelloWorld: {
            type: TestComponent_1.default,
            title: 'Sample Hello World App',
        },
    };
    return {
        columns: columns,
        widgets: widgets,
        onAdd: function () { },
        onRemove: function () { },
        layout: {},
        rowIndex: 1,
    };
}
describe('<Row />', function () {
    it('Should render the correct number of <Column />', function () {
        var _a = setup(), columns = _a.columns, widgets = _a.widgets;
        var component = enzyme_1.mount(React.createElement(ContainerWithDndContext_1.default, null,
            React.createElement(Row_1.default, { columns: columns, widgets: widgets })));
        chai_1.expect(component.find(Column_1.default)).to.have.length(3);
    });
    it('Should have the row class rendered', function () {
        var _a = setup(), columns = _a.columns, widgets = _a.widgets, onAdd = _a.onAdd, layout = _a.layout, rowIndex = _a.rowIndex;
        var component = enzyme_1.shallow(React.createElement(Row_1.default, { rowClass: "RowClass", columns: columns, widgets: widgets, onAdd: onAdd, layout: layout, rowIndex: rowIndex, editable: true }));
        chai_1.expect(component.find('.RowClass')).to.have.length(1);
    });
    it('Should pass the required properties to <Column />', function () {
        var _a = setup(), columns = _a.columns, widgets = _a.widgets, onAdd = _a.onAdd, layout = _a.layout, rowIndex = _a.rowIndex;
        var component = enzyme_1.mount(React.createElement(ContainerWithDndContext_1.default, null,
            React.createElement(Row_1.default, { columns: columns, widgets: widgets, onAdd: onAdd, layout: layout, rowIndex: rowIndex, editable: true })));
        chai_1.expect(component.find(Column_1.default).first().prop('className')).to.equal('col-md-4 col-sm-6 col-xs-6');
        chai_1.expect(component.find(Column_1.default).first().prop('onAdd')).to.equal(onAdd);
        chai_1.expect(component.find(Column_1.default).first().prop('layout')).to.equal(layout);
        chai_1.expect(component.find(Column_1.default).first().prop('rowIndex')).to.equal(rowIndex);
        chai_1.expect(component.find(Column_1.default).first().prop('columnIndex')).to.equal(0);
        chai_1.expect(component.find(Column_1.default).first().prop('editable')).to.equal(true);
    });
    it('Should pass the required properties to <Widgets />', function () {
        var _a = setup(), columns = _a.columns, widgets = _a.widgets, onAdd = _a.onAdd, onRemove = _a.onRemove, layout = _a.layout, rowIndex = _a.rowIndex;
        var component = enzyme_1.mount(React.createElement(ContainerWithDndContext_1.default, null,
            React.createElement(Row_1.default, { columns: columns, widgets: widgets, onAdd: onAdd, onRemove: onRemove, layout: layout, rowIndex: rowIndex, frameComponent: TestCustomFrame_1.default, editable: true })));
        chai_1.expect(component.find(Widgets_1.default).first().prop('widgets')).to.equal(columns[0].widgets);
        chai_1.expect(component.find(Widgets_1.default).first().prop('widgetTypes')).to.equal(widgets);
        chai_1.expect(component.find(Widgets_1.default).first().prop('onRemove')).to.equal(onRemove);
        chai_1.expect(component.find(Widgets_1.default).first().prop('layout')).to.equal(layout);
        chai_1.expect(component.find(Widgets_1.default).first().prop('rowIndex')).to.equal(rowIndex);
        chai_1.expect(component.find(Widgets_1.default).first().prop('columnIndex')).to.equal(0);
        chai_1.expect(component.find(Widgets_1.default).first().prop('editable')).to.equal(true);
        chai_1.expect(component.find(Widgets_1.default).first().prop('frameComponent')).to.equal(TestCustomFrame_1.default);
    });
});
//# sourceMappingURL=Row.spec.js.map