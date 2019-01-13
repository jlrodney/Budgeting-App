import React from 'react';
import { shallow } from 'enzyme';
import HelpPage from '../HelpPage';

describe('HelpPage should render  correctly', () => {
  it('should have a div', () => {
    const wrapper = shallow(<HelpPage />);
    expect(wrapper.find('div').text()).toEqual("This is the help page");
  })
});

describe('should render Header correctly', () => {
  const wrapper = shallow(<HelpPage />);
  expect(wrapper).toMatchSnapshot();
})
