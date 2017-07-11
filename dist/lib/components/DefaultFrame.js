"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
/**
 * Default frame that will be used with the widgets.
 */
var DefaultFrame = function (_a) {
    var children = _a.children, onRemove = _a.onRemove, editable = _a.editable, title = _a.title;
    return (React.createElement("div", { className: "defaultWidgetFrame" },
        React.createElement("div", { className: "defaultWidgetFrameHeader" },
            React.createElement("span", { className: "title" },
                title,
                " !!!!!"),
            editable && React.createElement("a", { className: "remove", onClick: function () { onRemove(); } }, "Remove")),
        children));
};
exports.default = DefaultFrame;
//# sourceMappingURL=DefaultFrame.js.map