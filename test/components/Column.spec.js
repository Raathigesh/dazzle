import { expect } from 'chai';
import { spy } from 'sinon';
import React from 'react';
import { mount } from 'enzyme';
import Column from '../../lib/components/Column';

describe('<Column />', () => {
  it('Should call onAdd when add is clicked', () => {
    let onAdd = spy();
    let layout = {};
    let rowIndex = 1;
    let columnIndex = 2;
    let OriginalColumn = Column.DecoratedComponent;
    let identity =  (el) => { return el; };
    const component = mount(<OriginalColumn layout={layout} rowIndex={rowIndex} columnIndex={columnIndex} onAdd={onAdd} editable  connectDropTarget={identity}/>);
    component.find('.add-widget-button').simulate('click');
    expect(onAdd.calledWithExactly(layout, rowIndex, columnIndex)).to.equal(true);
  });

  it('Should render the children', () => {
    let OriginalColumn = Column.DecoratedComponent;
    let identity =  (el) => { return el; };
    const component = mount(<OriginalColumn connectDropTarget={identity}><h1>HelloWorld</h1></OriginalColumn>);
    expect(component.contains(<h1>HelloWorld</h1>)).to.equal(true);
  });

  it('Should have the column class rendered', () => {
    let OriginalColumn = Column.DecoratedComponent;
    let identity =  (el) => { return el; };
    const component = mount(<OriginalColumn connectDropTarget={identity} className="ColumnClass"/>);
    expect(component.find('.ColumnClass')).to.have.length(1);
  });
});
