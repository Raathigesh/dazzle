import { expect } from 'chai';
import { spy } from 'sinon';
import React from 'react';
import { shallow, mount } from 'enzyme';
import WidgetFrame from '../../lib/components/WidgetFrame';
import DefaultFrame from '../../lib/components/DefaultFrame';
import TestCustomFrame from '../fake/TestCustomFrame';

describe('<WidgetFrame />', () => {
  it('Default frame should be used when customized frame is not provided', () => {
    let onAdd = spy();
    let layout = {};
    let rowIndex = 1;
    let columnIndex = 2;
    const component = shallow(<WidgetFrame layout={layout} rowIndex={rowIndex} columnIndex={columnIndex} onAdd={onAdd} editable/>);
    expect(component.type()).to.equal(DefaultFrame);
  });

  it('DefaultFrame should be provided with necessary props', () => {
    let children = [];
    let editable = false;
    let onRemove = () => {};
    let title = 'Widget Title';
    const component = shallow(<WidgetFrame children={children} editable={editable} onRemove={onRemove} title={title} />);
    expect(component.prop('children')).to.equal(children);
    expect(component.prop('editable')).to.equal(editable);
    expect(component.prop('title')).to.equal(title);
  });

  it('DefaultFrame onRemove should be called when close is clicked', () => {
    let children = [];
    let editable = false;
    let onRemove = spy();
    let title = 'Widget Title';
    const layout = {
      rows: [{
        columns: [{
          className: 'col-md-4',
          widgets: [{name: 'HelloWorld'}],
        }],
      }],
    };
    const component = mount(<WidgetFrame layout={layout} rowIndex={0} columnIndex={0} widgetIndex={0} children={children} editable={editable} onRemove={onRemove} title={title} editable/>);
    component.find('a').simulate('click');
    expect(onRemove.calledWithExactly({
      rows: [{
        columns: [{
          className: 'col-md-4',
          widgets: [],
        }],
      }],
    })).to.equal(true);
  });

  it('Customized frame should be used if provided', () => {
    let onAdd = spy();
    let layout = {};
    let rowIndex = 1;
    let columnIndex = 2;
    const component = shallow(<WidgetFrame layout={layout} rowIndex={rowIndex} columnIndex={columnIndex} onAdd={onAdd} editable frame={TestCustomFrame}/>);
    expect(component.type()).to.equal(TestCustomFrame);
  });

  it('Customized frame should be provided with necessary props', () => {
    let children = [];
    let editable = false;
    let onRemove = () => {};
    let title = 'Widget Title';
    const component = shallow(<WidgetFrame children={children} editable={editable} onRemove={onRemove} title={title} frame={TestCustomFrame}/>);
    expect(component.prop('children')).to.equal(children);
    expect(component.prop('editable')).to.equal(editable);
    expect(component.prop('title')).to.equal(title);
  });
});
