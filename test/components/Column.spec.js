import { expect } from 'chai';
import { spy } from 'sinon';
import React from 'react';
import { mount } from 'enzyme';
import Column from '../../lib/components/Column';

/* eslint max-len: "off" */
describe('<Column />', () => {
  it('Should call onAdd when add is clicked', () => {
    const onAdd = spy();
    const layout = {};
    const rowIndex = 1;
    const columnIndex = 2;
    const OriginalColumn = Column.DecoratedComponent;
    const identity = (el) => el;
    const component = mount(<OriginalColumn layout={layout} rowIndex={rowIndex} columnIndex={columnIndex} onAdd={onAdd} editable connectDropTarget={identity} />);
    component.find('.add-widget-button').simulate('click');
    expect(onAdd.calledWithExactly(layout, rowIndex, columnIndex)).to.equal(true);
  });

  it('Should render the children', () => {
    const OriginalColumn = Column.DecoratedComponent;
    const identity = (el) => el;
    const component = mount(<OriginalColumn connectDropTarget={identity}><h1>HelloWorld</h1></OriginalColumn>);
    expect(component.contains(<h1>HelloWorld</h1>)).to.equal(true);
  });

  it('Should have the column class rendered', () => {
    const OriginalColumn = Column.DecoratedComponent;
    const identity = (el) => el;
    const component = mount(<OriginalColumn connectDropTarget={identity} className="ColumnClass" />);
    expect(component.find('.ColumnClass')).to.have.length(1);
  });
});
