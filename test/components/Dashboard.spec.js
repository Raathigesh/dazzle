import { expect } from 'chai';
import React from 'react';
import { mount } from 'enzyme';
import Dashbaord from '../../lib/components/Dashboard';
import LayoutRenderer from '../../lib/components/LayoutRenderer';

describe('<Dashboard />', () => {
  it('Should have a  <LayoutRenderer />', () => {
    const component = mount(<Dashbaord />);
    expect(component.find(LayoutRenderer)).to.have.length(1);
  });
});
