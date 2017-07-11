"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Row_1 = require("./Row");
/**
 * Renders the row, column layout based on the layout provided to the dashboard.
 */
var LayoutRenderer = function (props) {
    var layout = props.layout, widgets = props.widgets, onRemove = props.onRemove, editable = props.editable, onAdd = props.onAdd, frameComponent = props.frameComponent, rowClass = props.rowClass, onMove = props.onMove, editableColumnClass = props.editableColumnClass, droppableColumnClass = props.droppableColumnClass, addWidgetComponentText = props.addWidgetComponentText, addWidgetComponent = props.addWidgetComponent;
    var rows = layout.rows.map(function (row, rowIndex) {
        return (React.createElement(Row_1.default, { key: rowIndex, rowClass: rowClass, columns: row.columns, widgets: widgets, onRemove: onRemove, layout: layout, rowIndex: rowIndex, editable: editable, onAdd: onAdd, onMove: onMove, frameComponent: frameComponent, editableColumnClass: editableColumnClass, droppableColumnClass: droppableColumnClass, addWidgetComponentText: addWidgetComponentText, addWidgetComponent: addWidgetComponent }));
    });
    return (React.createElement("div", null, rows));
};
LayoutRenderer.defaultProps = {
    /**
     * Default layout.
     */
    layout: {
        rows: [],
    },
};
exports.default = LayoutRenderer;
//# sourceMappingURL=LayoutRenderer.js.map