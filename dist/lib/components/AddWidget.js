"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
/**
 * Default AddWidget component.
 * @param  {[type]} {text    [description]
 * @param  {[type]} onClick} [description]
 * @return {[type]}          [description]
 */
var AddWidget = function (_a) {
    var text = _a.text, onClick = _a.onClick;
    return (React.createElement("div", { className: "add-widget-button", onClick: onClick },
        React.createElement("a", { className: "add-widget-link" }, text)));
};
AddWidget.defaultProps = {
    text: 'Add Widget',
};
exports.default = AddWidget;
//# sourceMappingURL=AddWidget.js.map