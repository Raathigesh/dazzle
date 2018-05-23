import { expect } from 'chai';
import React from 'react';
import { mount } from 'enzyme';
import { default as Dashboard, DashboardWithoutDndContext as DashboardWithoutDndContext } from '../../lib/components/Dashboard';
import LayoutRenderer from '../../lib/components/LayoutRenderer';

describe('<Dashboard />', () => {
  it('Should have a  <LayoutRenderer />', () => {
    const component = mount(<Dashboard />);
    expect(component.find(LayoutRenderer)).to.have.length(1);
  });
});

describe('<DashboardWithoutDndContext />', () => {
  it('Should have a  <LayoutRenderer />', () => {
    const component = mount(<DashboardWithoutDndContext />);
    expect(component.find(LayoutRenderer)).to.have.length(1);
  });
});
