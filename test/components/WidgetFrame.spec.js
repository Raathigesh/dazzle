import { expect } from 'chai';
import { spy } from 'sinon';
import React from 'react';
import { mount } from 'enzyme';
import WidgetFrame from '../../lib/components/WidgetFrame';
import DefaultFrame from '../../lib/components/DefaultFrame';
import TestCustomFrame from '../fake/TestCustomFrame';
import ContainerWithDndContext from '../fake/ContainerWithDndContext';

describe('<WidgetFrame />', () => {
  it('Default frame should be used when customized frame is not provided', () => {
    const onAdd = spy();
    const layout = {};
    const rowIndex = 1;
    const columnIndex = 2;
    const OriginalWidgetFrame = WidgetFrame.DecoratedComponent;
    const identity = (el) => el;
    const component = mount(
      <ContainerWithDndContext>
        <OriginalWidgetFrame
          layout={layout}
          rowIndex={rowIndex}
          columnIndex={columnIndex}
          onAdd={onAdd}
          editable
          connectDragSource={identity}
          connectDropTarget={identity}
        />
      </ContainerWithDndContext>
    );
    expect(component.find(DefaultFrame)).to.have.length(1);
  });

  it('DefaultFrame should be provided with necessary props', () => {
    const children = [];
    const editable = false;
    const onRemove = () => {};
    const title = 'Widget Title';
    const OriginalWidgetFrame = WidgetFrame.DecoratedComponent;
    const identity = (el) => el;
    const component = mount(
      <ContainerWithDndContext>
        <OriginalWidgetFrame
          children={children}
          editable={editable}
          onRemove={onRemove}
          title={title}
          connectDragSource={identity}
          connectDropTarget={identity}
        />
      </ContainerWithDndContext>
    );
    expect(component.find(DefaultFrame).first().prop('children')).to.equal(children);
    expect(component.find(DefaultFrame).first().prop('editable')).to.equal(editable);
    expect(component.find(DefaultFrame).first().prop('title')).to.equal(title);
  });

  it('DefaultFrame onRemove should be called when close is clicked', () => {
    const children = [];
    const editable = false;
    const onRemove = spy();
    const title = 'Widget Title';
    const layout = {
      rows: [{
        columns: [{
          className: 'col-md-4',
          widgets: [{ name: 'HelloWorld' }],
        }],
      }],
    };

    const OriginalWidgetFrame = WidgetFrame.DecoratedComponent;
    const identity = (el) => el;
    const component = mount(
      <ContainerWithDndContext>
        <OriginalWidgetFrame
          layout={layout}
          rowIndex={0}
          columnIndex={0}
          widgetIndex={0}
          children={children}
          editable={editable}
          onRemove={onRemove}
          title={title}
          editable
          connectDragSource={identity}
          connectDropTarget={identity}
        />
      </ContainerWithDndContext>
    );
    component.find('a.remove').simulate('click');
    expect(onRemove.calledWithExactly({
      rows: [{
        columns: [{
          className: 'col-md-4',
          widgets: [],
        }],
      }],
    }, 0, 0, 0)).to.equal(true);
  });

  it('Customized frame should be used if provided', () => {
    const onAdd = spy();
    const layout = {};
    const rowIndex = 1;
    const columnIndex = 2;
    const OriginalWidgetFrame = WidgetFrame.DecoratedComponent;
    const identity = (el) => el;
    const component = mount(
      <ContainerWithDndContext>
        <OriginalWidgetFrame
          layout={layout}
          rowIndex={rowIndex}
          columnIndex={columnIndex}
          onAdd={onAdd}
          editable
          frameComponent={TestCustomFrame}
          connectDragSource={identity}
          connectDropTarget={identity}
        />
      </ContainerWithDndContext>
    );
    expect(component.find(TestCustomFrame)).to.have.length(1);
  });

  it('Customized frame should be provided with necessary props', () => {
    const children = [];
    const editable = false;
    const onRemove = () => {};
    const title = 'Widget Title';
    const OriginalWidgetFrame = WidgetFrame.DecoratedComponent;
    const identity = (el) => el;
    const settings = {
      color: '#E140AD',
    };
    const component = mount(
      <ContainerWithDndContext>
        <OriginalWidgetFrame
          children={children}
          editable={editable}
          onRemove={onRemove}
          title={title}
          frameComponent={TestCustomFrame}
          frameSettings={settings}
          connectDragSource={identity}
          connectDropTarget={identity}
        />
      </ContainerWithDndContext>
    );

    expect(component.find(TestCustomFrame).first().prop('children')).to.equal(children);
    expect(component.find(TestCustomFrame).first().prop('editable')).to.equal(editable);
    expect(component.find(TestCustomFrame).first().prop('title')).to.equal(title);
    expect(component.find(TestCustomFrame).first().prop('settings')).to.equal(settings);
  });
});
