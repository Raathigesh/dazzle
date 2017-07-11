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
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var react_dnd_1 = require("react-dnd");
var ItemTypes_1 = require("./ItemTypes");
var util_1 = require("../util");
var DefaultFrame_1 = require("./DefaultFrame");
var boxSource = {
    beginDrag: function (props) {
        return {
            widgetName: props.widgetName,
            rowIndex: props.rowIndex,
            columnIndex: props.columnIndex,
            widgetIndex: props.widgetIndex,
        };
    },
    canDrag: function (props) {
        return props.editable;
    },
};
var cardTarget = {
    hover: function (props, monitor, component) {
        var dragIndex = monitor.getItem().widgetIndex;
        var hoverIndex = props.widgetIndex;
        // Don't replace items with themselves
        if (dragIndex === hoverIndex) {
            return;
        }
        // Determine rectangle on screen
        var hoverBoundingRect = react_dom_1.findDOMNode(component).getBoundingClientRect();
        // Get vertical middle
        var hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
        // Determine mouse position
        var clientOffset = monitor.getClientOffset();
        // Get pixels to the top
        var hoverClientY = clientOffset.y - hoverBoundingRect.top;
        // Only perform the move when the mouse has crossed half of the items height
        // When dragging downwards, only move when the cursor is below 50%
        // When dragging upwards, only move when the cursor is above 50%
        // Dragging downwards
        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
            return;
        }
        // Dragging upwards
        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
            return;
        }
        // Time to actually perform the action
        var layout = props.layout, columnIndex = props.columnIndex, rowIndex = props.rowIndex;
        if (monitor.getItem().columnIndex === columnIndex) {
            var newLayout = util_1.sortWidget(layout, {
                rowIndex: rowIndex,
                columnIndex: columnIndex,
                widgetIndex: dragIndex,
            }, {
                rowIndex: rowIndex,
                columnIndex: columnIndex,
                widgetIndex: hoverIndex,
            }, monitor.getItem().widgetName);
            props.onMove(newLayout);
            // Note: we're mutating the monitor item here!
            // Generally it's better to avoid mutations,
            // but it's good here for the sake of performance
            // to avoid expensive index searches.
            monitor.getItem().widgetIndex = hoverIndex;
        }
    },
};
/**
 * Frame component which surrounds each widget.
 */
var WidgetFrame = (function (_super) {
    __extends(WidgetFrame, _super);
    function WidgetFrame() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.remove = function () {
            var _a = _this.props, layout = _a.layout, rowIndex = _a.rowIndex, columnIndex = _a.columnIndex, widgetIndex = _a.widgetIndex;
            var newLayout = util_1.removeWidget(layout, rowIndex, columnIndex, widgetIndex);
            _this.props.onRemove(newLayout);
        };
        return _this;
    }
    WidgetFrame.prototype.render = function () {
        var _a = this.props, frameComponent = _a.frameComponent, children = _a.children, editable = _a.editable, title = _a.title, connectDragSource = _a.connectDragSource, connectDropTarget = _a.connectDropTarget, isDragging = _a.isDragging;
        var selected = null;
        if (frameComponent) {
            // if user provided a custom frame,  use it
            selected = react_1.createElement(frameComponent, { children: children, editable: editable, title: title, onRemove: this.remove });
        }
        else {
            // else use the default frame
            selected = (React.createElement(DefaultFrame_1.default, { title: title, editable: editable, children: children, onRemove: this.remove }));
        }
        var opacity = isDragging ? 0 : 1;
        return connectDragSource(connectDropTarget(React.createElement("div", { style: { opacity: opacity } }, selected)));
    };
    return WidgetFrame;
}(react_1.Component));
WidgetFrame = __decorate([
    react_dnd_1.DropTarget(ItemTypes_1.WIDGET, cardTarget, function (connect) { return ({
        connectDropTarget: connect.dropTarget(),
    }); }),
    react_dnd_1.DragSource(ItemTypes_1.WIDGET, boxSource, function (connect, monitor) { return ({
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging(),
    }); })
], WidgetFrame);
exports.default = WidgetFrame;
//# sourceMappingURL=WidgetFrame.js.map