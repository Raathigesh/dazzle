import { expect } from 'chai';
import * as React from 'react';
import { mount } from 'enzyme';
import Dashboard from '../../lib/components/Dashboard';
import LayoutRenderer from '../../lib/components/LayoutRenderer';

describe('<Dashboard />', () => {
  it('Should have a  <LayoutRenderer />', () => {
    const component = mount(<Dashboard />);
    expect(component.find(LayoutRenderer)).to.have.length(1);
  });
});
