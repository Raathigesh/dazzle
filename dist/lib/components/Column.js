"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_dnd_1 = require("react-dnd");
var ItemTypes_1 = require("./ItemTypes");
var AddWidget_1 = require("./AddWidget");
var util_1 = require("../util");
var columnTarget = {
    drop: function (props, monitor) {
        var layout = props.layout, rowIndex = props.rowIndex, columnIndex = props.columnIndex, onMove = props.onMove;
        var item = monitor.getItem();
        if (item.columnIndex !== columnIndex || item.rowIndex !== rowIndex) {
            var movedLayout = util_1.moveWidget(layout, {
                rowIndex: item.rowIndex,
                columnIndex: item.columnIndex,
                widgetIndex: item.widgetIndex,
            }, {
                rowIndex: rowIndex,
                columnIndex: columnIndex,
            }, item.widgetName);
            onMove(movedLayout);
        }
    },
};
/**
 * Column of the dashboard grid. A column holds multiple widgets.
 */
var Column = (function (_super) {
    __extends(Column, _super);
    function Column() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Column.prototype.render = function () {
        var _a = this.props, className = _a.className, layout = _a.layout, rowIndex = _a.rowIndex, columnIndex = _a.columnIndex, editable = _a.editable, children = _a.children, connectDropTarget = _a.connectDropTarget, onAdd = _a.onAdd, isOver = _a.isOver, canDrop = _a.canDrop, editableColumnClass = _a.editableColumnClass, droppableColumnClass = _a.droppableColumnClass, addWidgetComponentText = _a.addWidgetComponentText, addWidgetComponent = _a.addWidgetComponent;
        var classes = className;
        classes = editable ? className + " " + editableColumnClass : classes;
        var isActive = isOver && canDrop;
        classes = isActive ? classes + " " + droppableColumnClass : classes;
        var addWidgetComponentToUse = null;
        if (addWidgetComponent) {
            addWidgetComponentToUse = React.createElement(addWidgetComponent, { text: addWidgetComponentText, onClick: function () { onAdd(layout, rowIndex, columnIndex); } });
        }
        else {
            addWidgetComponentToUse = React.createElement(AddWidget_1.default, { text: addWidgetComponentText, onClick: function () { onAdd(layout, rowIndex, columnIndex); } });
        }
        return (connectDropTarget(React.createElement("div", { className: classes },
            editable && addWidgetComponentToUse,
            children)));
    };
    return Column;
}(React.Component));
Column.defaultProps = {
    editableColumnClass: 'editable-column',
    droppableColumnClass: 'droppable-column',
};
Column = __decorate([
    react_dnd_1.DropTarget(ItemTypes_1.WIDGET, columnTarget, function (connect, monitor) { return ({
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
    }); })
], Column);
exports.default = Column;
//# sourceMappingURL=Column.js.map