import { expect } from 'chai';
import { addWidget, removeWidget } from '../../lib/util';

function setup() {
  return {
    rows: [{
      columns: [{
        className: 'col-md-4 col-sm-6 col-xs-6',
        widgets: [{key: 'HelloWorld'}],
      }, {
        className: 'col-md-4 col-sm-6 col-xs-6',
        widgets: [],
      }],
    }],
  };
}

describe('Util.addWidget()', () => {
  it('Should add a new widget to the specified location', () => {
    const layout = setup();
    expect({
      rows: [{
        columns: [{
          className: 'col-md-4 col-sm-6 col-xs-6',
          widgets: [{key: 'HelloWorld'}, {key: 'NewWidget'}],
        }, {
          className: 'col-md-4 col-sm-6 col-xs-6',
          widgets: [],
        }],
      }],
    }).to.eql(addWidget(layout, 0, 0, 'NewWidget'));
  });
});

describe('Util.removeWidget()', () => {
  it('Should remove a widget from the specified location', () => {
    const layout = setup();
    expect({
      rows: [{
        columns: [{
          className: 'col-md-4 col-sm-6 col-xs-6',
          widgets: [],
        }, {
          className: 'col-md-4 col-sm-6 col-xs-6',
          widgets: [],
        }],
      }],
    }).to.eql(removeWidget(layout, 0, 0, 0));
  });
});
