import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';
import { spy } from 'sinon';
import AddWidget from '../../lib/components/AddWidget';

describe('<AddWidget />', () => {
  it('Should render the children', () => {
    const widgetText = 'Add new widget yo!';
    const component = shallow(<AddWidget text={widgetText}/>);
    expect(component.find('a').first().text()).to.equal(widgetText);
  });

  it('Should use the default text when text is not provided', () => {
    const component = shallow(<AddWidget />);
    expect(component.find('a').first().text()).to.equal('Add Widget');
  });

  it('Should call onClick when clicked', () => {
    const onClick = spy();
    const component = shallow(<AddWidget onClick={onClick} />);
    component.find('div').simulate('click');
    expect(onClick.calledOnce).to.equal(true);
  });
});
