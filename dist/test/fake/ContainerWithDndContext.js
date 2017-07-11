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
var react_dnd_1 = require("react-dnd");
var react_dnd_html5_backend_1 = require("react-dnd-html5-backend");
var ContainerWithDndContext = (function (_super) {
    __extends(ContainerWithDndContext, _super);
    function ContainerWithDndContext() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContainerWithDndContext.prototype.render = function () {
        return (React.createElement("div", null, this.props.children));
    };
    return ContainerWithDndContext;
}(react_1.Component));
ContainerWithDndContext = __decorate([
    react_dnd_1.DragDropContext(react_dnd_html5_backend_1.default)
], ContainerWithDndContext);
exports.default = ContainerWithDndContext;
//# sourceMappingURL=ContainerWithDndContext.js.map