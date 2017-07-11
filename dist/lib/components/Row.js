"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Column_1 = require("./Column");
var Widgets_1 = require("./Widgets");
/**
 * Returns a set of columns that belongs to a row.
 */
var Row = function (props) {
    var rowClass = props.rowClass, columns = props.columns, widgets = props.widgets, onRemove = props.onRemove, layout = props.layout, rowIndex = props.rowIndex, editable = props.editable, frameComponent = props.frameComponent, editableColumnClass = props.editableColumnClass, droppableColumnClass = props.droppableColumnClass, addWidgetComponentText = props.addWidgetComponentText, addWidgetComponent = props.addWidgetComponent, onAdd = props.onAdd, onMove = props.onMove;
    var items = columns.map(function (column, index) {
        return (React.createElement(Column_1.default, { key: index, className: column.className, onAdd: onAdd, layout: layout, rowIndex: rowIndex, columnIndex: index, editable: editable, onMove: onMove, editableColumnClass: editableColumnClass, droppableColumnClass: droppableColumnClass, addWidgetComponent: addWidgetComponent, addWidgetComponentText: addWidgetComponentText },
            React.createElement(Widgets_1.default, { key: index, widgets: column.widgets, widgetTypes: widgets, onRemove: onRemove, layout: layout, rowIndex: rowIndex, columnIndex: index, editable: editable, frameComponent: frameComponent, onMove: onMove })));
    });
    var rowClassValue = rowClass || "row";
    return (React.createElement("div", { className: rowClass }, items));
};
exports.default = Row;
//# sourceMappingURL=Row.js.map