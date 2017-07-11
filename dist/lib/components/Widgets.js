"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var WidgetFrame_1 = require("./WidgetFrame");
/**
 * Component that renders the widget which belongs to a column.
 */
var Widgets = function (_a) {
    var widgets = _a.widgets, widgetTypes = _a.widgetTypes, onRemove = _a.onRemove, layout = _a.layout, columnIndex = _a.columnIndex, rowIndex = _a.rowIndex, editable = _a.editable, frameComponent = _a.frameComponent, onMove = _a.onMove;
    var createdWidgets = widgets.map(function (widget, index) {
        return (React.createElement(WidgetFrame_1.default, { key: index, widgetName: widget.key, title: widgetTypes[widget.key].title, onRemove: onRemove, layout: layout, columnIndex: columnIndex, rowIndex: rowIndex, widgetIndex: index, editable: editable, frameComponent: frameComponent, onMove: onMove }, react_1.createElement(widgetTypes[widget.key].type, widgetTypes[widget.key].props)));
    });
    return React.createElement("div", null, createdWidgets);
};
exports.default = Widgets;
//# sourceMappingURL=Widgets.js.map