"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var sinon_1 = require("sinon");
var React = require("react");
var enzyme_1 = require("enzyme");
var Column_1 = require("../../lib/components/Column");
describe('<Column />', function () {
    it('Should call onAdd when add is clicked', function () {
        var onAdd = sinon_1.spy();
        var layout = {};
        var rowIndex = 1;
        var columnIndex = 2;
        var OriginalColumn = Column_1.default.DecoratedComponent;
        var identity = function (el) { return el; };
        var component = enzyme_1.mount(React.createElement(OriginalColumn, { layout: layout, rowIndex: rowIndex, columnIndex: columnIndex, onAdd: onAdd, editable: true, connectDropTarget: identity }));
        component.find('.add-widget-button').simulate('click');
        chai_1.expect(onAdd.calledWithExactly(layout, rowIndex, columnIndex)).to.equal(true);
    });
    it('Should render the children', function () {
        var OriginalColumn = Column_1.default.DecoratedComponent;
        var identity = function (el) { return el; };
        var component = enzyme_1.mount(React.createElement(OriginalColumn, { connectDropTarget: identity },
            React.createElement("h1", null, "HelloWorld")));
        chai_1.expect(component.contains(React.createElement("h1", null, "HelloWorld"))).to.equal(true);
    });
    it('Should have the column class rendered', function () {
        var OriginalColumn = Column_1.default.DecoratedComponent;
        var identity = function (el) { return el; };
        var component = enzyme_1.mount(React.createElement(OriginalColumn, { connectDropTarget: identity, className: "ColumnClass" }));
        chai_1.expect(component.find('.ColumnClass')).to.have.length(1);
    });
});
//# sourceMappingURL=Column.spec.js.map