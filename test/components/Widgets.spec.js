import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';
import Widgets from '../../lib/components/Widgets';
import WidgetFrame from '../../lib/components/WidgetFrame';
import TestComponent from '../fake/TestComponent';

describe('<Widgets />', () => {
  it('Should render widgets with widget frames', () => {
    const widgets = [{key: 'HelloWorld'}];
    const widgetTypes = {
      HelloWorld: {
        type: TestComponent,
        title: 'Sample Hello World App',
      },
    };
    const component = shallow(<Widgets widgets={widgets} widgetTypes={widgetTypes} />);
    expect(component.find(WidgetFrame)).to.have.length(1);
  });

  it('Should pass the properties to WidgetFrame', () => {
    const widgets = [{key: 'HelloWorld'}];
    const widgetTypes = {
      HelloWorld: {
        type: TestComponent,
        title: 'Sample Hello World App',
      },
    };

    const layout = {};
    const columnIndex = 5;
    const rowIndex = 6;
    const widgetIndex = 0;
    const editable = false;
    const frame = () => {};
    const onRemove = () => {};

    const component = shallow(
      <Widgets
      widgets={widgets}
      widgetTypes={widgetTypes}
      layout={layout}
      columnIndex={columnIndex}
      rowIndex={rowIndex}
      widgetIndex={widgetIndex}
      editable={editable}
      frameComponent={frame}
      onRemove={onRemove}
      />
    );

    expect(component.find(WidgetFrame).at(0).prop('title')).to.equal('Sample Hello World App');
    expect(component.find(WidgetFrame).at(0).prop('layout')).to.equal(layout);
    expect(component.find(WidgetFrame).at(0).prop('columnIndex')).to.equal(columnIndex);
    expect(component.find(WidgetFrame).at(0).prop('rowIndex')).to.equal(rowIndex);
    expect(component.find(WidgetFrame).at(0).prop('widgetIndex')).to.equal(widgetIndex);
    expect(component.find(WidgetFrame).at(0).prop('editable')).to.equal(editable);
    expect(component.find(WidgetFrame).at(0).prop('frameComponent')).to.equal(frame);
    expect(component.find(WidgetFrame).at(0).prop('onRemove')).to.equal(onRemove);
  });

  it('Frame should have the actual widget as children', () => {
    const widgets = [{key: 'HelloWorld'}];
    const widgetTypes = {
      HelloWorld: {
        type: TestComponent,
        title: 'Sample Hello World App',
      },
    };

    const component = shallow(
      <Widgets
      widgets={widgets}
      widgetTypes={widgetTypes}
      />
    );

    expect(component.find(WidgetFrame).first().childAt(0).type()).to.equal(TestComponent);
  });
});
