import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';
import Row from '../../lib/components/Row';

describe('<Row />', () => {
  it('Should render the children', () => {
    const component = shallow(<Row><h1>HelloWorld</h1></Row>);
    expect(component.contains(<h1>HelloWorld</h1>)).to.equal(true);
  });

  it('Should have the row class rendered', () => {
    const component = shallow(<Row rowClass="RowClass"/>);
    expect(component.find('.RowClass')).to.have.length(1);
  });
});
