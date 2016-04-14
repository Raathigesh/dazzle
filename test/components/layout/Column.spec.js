import { expect } from 'chai';
import { spy } from 'sinon';
import React from 'react';
import { shallow } from 'enzyme';
import Column from '../../../lib/components/Column.jsx';

describe('<Column />', () => {
	it('Should call onAdd when add is clicked', () => {
		let onAdd = spy();
		let layout = {};
		let rowIndex = 1;
		let columnIndex = 2;
		const component = shallow(<Column layout={layout} rowIndex={rowIndex} columnIndex={columnIndex} onAdd={onAdd} editable/>);
		component.find('button').simulate('click');
		expect(onAdd.calledWithExactly(layout, rowIndex, columnIndex)).to.equal(true);
	});

	it('Should render the children', () => {
		const component = shallow(<Column><h1>HelloWorld</h1></Column>);
		expect(component.contains(<h1>HelloWorld</h1>)).to.equal(true);
	});

	it('Should have the column class rendered', () => {
		const component = shallow(<Column className="ColumnClass"/>);
		expect(component.find('.ColumnClass')).to.have.length(1);
	});
});
