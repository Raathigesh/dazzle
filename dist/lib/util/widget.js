"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var update = require("react/lib/update");
/**
 * Adds the specified widget to the specified position in the layout.
 */
function addWidget(layout, rowIndex, columnIndex, widgetName) {
    return update(layout, {
        rows: (_a = {},
            _a[rowIndex] = {
                columns: (_b = {},
                    _b[columnIndex] = {
                        widgets: {
                            $push: [{
                                    key: widgetName,
                                }],
                        },
                    },
                    _b),
            },
            _a),
    });
    var _a, _b;
}
exports.addWidget = addWidget;
/**
 * Removes the widget at a specified index.
 */
function removeWidget(layout, rowIndex, columnIndex, widgetIndex) {
    return update(layout, {
        rows: (_a = {},
            _a[rowIndex] = {
                columns: (_b = {},
                    _b[columnIndex] = {
                        widgets: {
                            $splice: [
                                [widgetIndex, 1],
                            ],
                        },
                    },
                    _b),
            },
            _a),
    });
    var _a, _b;
}
exports.removeWidget = removeWidget;
/**
 * Moves a widget from column to column.
 */
function moveWidget(layout, initialLocation, destination, widgetName) {
    var removedLayout = removeWidget(layout, initialLocation.rowIndex, initialLocation.columnIndex, initialLocation.widgetIndex);
    var movedLayout = addWidget(removedLayout, destination.rowIndex, destination.columnIndex, widgetName);
    return movedLayout;
}
exports.moveWidget = moveWidget;
/**
 * Sorts a widget in the same column.
 */
function sortWidget(layout, initialLocation, destination, widgetName) {
    return update(layout, {
        rows: (_a = {},
            _a[initialLocation.rowIndex] = {
                columns: (_b = {},
                    _b[initialLocation.columnIndex] = {
                        widgets: {
                            $splice: [
                                [initialLocation.widgetIndex, 1],
                                [destination.widgetIndex, 0, {
                                        key: widgetName,
                                    }],
                            ],
                        },
                    },
                    _b),
            },
            _a),
    });
    var _a, _b;
}
exports.sortWidget = sortWidget;
//# sourceMappingURL=widget.js.map