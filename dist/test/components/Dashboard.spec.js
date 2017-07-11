"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var React = require("react");
var enzyme_1 = require("enzyme");
var Dashboard_1 = require("../../lib/components/Dashboard");
var LayoutRenderer_1 = require("../../lib/components/LayoutRenderer");
describe('<Dashboard />', function () {
    it('Should have a  <LayoutRenderer />', function () {
        var component = enzyme_1.mount(React.createElement(Dashboard_1.default, null));
        chai_1.expect(component.find(LayoutRenderer_1.default)).to.have.length(1);
    });
});
//# sourceMappingURL=Dashboard.spec.js.map