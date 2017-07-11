"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var util_1 = require("../../lib/util");
function setup() {
    return {
        rows: [{
                columns: [{
                        className: 'col-md-4 col-sm-6 col-xs-6',
                        widgets: [{ key: 'HelloWorld' }],
                    }, {
                        className: 'col-md-4 col-sm-6 col-xs-6',
                        widgets: [],
                    }],
            }],
    };
}
describe('Util.addWidget()', function () {
    it('Should add a new widget to the specified location', function () {
        var layout = setup();
        chai_1.expect({
            rows: [{
                    columns: [{
                            className: 'col-md-4 col-sm-6 col-xs-6',
                            widgets: [{ key: 'HelloWorld' }, { key: 'NewWidget' }],
                        }, {
                            className: 'col-md-4 col-sm-6 col-xs-6',
                            widgets: [],
                        }],
                }],
        }).to.eql(util_1.addWidget(layout, 0, 0, 'NewWidget'));
    });
});
describe('Util.removeWidget()', function () {
    it('Should remove a widget from the specified location', function () {
        var layout = setup();
        chai_1.expect({
            rows: [{
                    columns: [{
                            className: 'col-md-4 col-sm-6 col-xs-6',
                            widgets: [],
                        }, {
                            className: 'col-md-4 col-sm-6 col-xs-6',
                            widgets: [],
                        }],
                }],
        }).to.eql(util_1.removeWidget(layout, 0, 0, 0));
    });
});
//# sourceMappingURL=until.spec.js.map