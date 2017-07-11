"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsdom_1 = require("jsdom");
var globalAny = global;
;
globalAny.document = jsdom_1.jsdom('<!doctype html><html><body></body></html>');
globalAny.window = document.defaultView;
var windowAny = globalAny.window;
globalAny.navigator = globalAny.window.navigator;
windowAny.localStorage = windowAny.sessionStorage = {
    getItem: function (key) {
        return this[key];
    },
    setItem: function (key, value) {
        this[key] = value;
    },
    removeItem: function (key) {
        this[key] = undefined;
    },
};
//# sourceMappingURL=entry.js.map