import { expect } from 'chai';
import React from 'react';
import { mount } from 'enzyme';
import Column from '../../lib/components/Column';
import Columns from '../../lib/components/Columns';
import Widgets from '../../lib/components/Widgets';
import TestComponent from '../fake/TestComponent';
import TestCustomFrame from '../fake/TestCustomFrame';
import ContainerWithDndContext from '../fake/ContainerWithDndContext';

function setup() {
  const columns = [{
    className: 'col-md-4 col-sm-6 col-xs-6',
    widgets: [{key: 'HelloWorld'}],
  }, {
    className: 'col-md-4 col-sm-6 col-xs-6',
    widgets: [{key: 'HelloWorld'}],
  }, {
    className: 'col-md-4 col-sm-6 col-xs-6',
    widgets: [{key: 'HelloWorld'}],
  }];

  const widgets = {
    HelloWorld: {
      type: TestComponent,
      title: 'Sample Hello World App',
    },
  };

  return {
    columns,
    widgets,
    onAdd: () => {},
    onRemove: () => {},
    layout: {},
    rowIndex: 1,
  };
}

describe('<Columns />', () => {
  it('Should render the correct number of <Column />', () => {
    const { columns, widgets } = setup();
    const component = mount(<ContainerWithDndContext><Columns columns={columns} widgets={widgets} /></ContainerWithDndContext>);
    expect(component.find(Column)).to.have.length(3);
  });

  it('Should pass the required properties to <Column />', () => {
    const { columns, widgets, onAdd, layout, rowIndex } = setup();
    const component = mount(
      <ContainerWithDndContext>
        <Columns
          columns={columns}
          widgets={widgets}
          onAdd={onAdd}
          layout={layout}
          rowIndex={rowIndex}
          editable/>
      </ContainerWithDndContext>
    );
    expect(component.find(Column).first().prop('className')).to.equal('col-md-4 col-sm-6 col-xs-6');
    expect(component.find(Column).first().prop('onAdd')).to.equal(onAdd);
    expect(component.find(Column).first().prop('layout')).to.equal(layout);
    expect(component.find(Column).first().prop('rowIndex')).to.equal(rowIndex);
    expect(component.find(Column).first().prop('columnIndex')).to.equal(0);
    expect(component.find(Column).first().prop('editable')).to.equal(true);
  });

  it('Should pass the required properties to <Widgets />', () => {
    const { columns, widgets, onAdd, onRemove, layout, rowIndex } = setup();
    const component = mount(
      <ContainerWithDndContext>
        <Columns
          columns={columns}
          widgets={widgets}
          onAdd={onAdd}
          onRemove={onRemove}
          layout={layout}
          rowIndex={rowIndex}
          frameComponent={TestCustomFrame}
          editable />
      </ContainerWithDndContext>
    );
    expect(component.find(Widgets).first().prop('widgets')).to.equal(columns[0].widgets);
    expect(component.find(Widgets).first().prop('widgetTypes')).to.equal(widgets);
    expect(component.find(Widgets).first().prop('onRemove')).to.equal(onRemove);
    expect(component.find(Widgets).first().prop('layout')).to.equal(layout);
    expect(component.find(Widgets).first().prop('rowIndex')).to.equal(rowIndex);
    expect(component.find(Widgets).first().prop('columnIndex')).to.equal(0);
    expect(component.find(Widgets).first().prop('editable')).to.equal(true);
    expect(component.find(Widgets).first().prop('frameComponent')).to.equal(TestCustomFrame);
  });
});
