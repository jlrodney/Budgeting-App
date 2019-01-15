import React from 'react';
import { shallow } from 'enzyme';
import HelpPage from '../HelpPage';

describe('HelpPage should render  correctly', () => {
  it('should have a div', () => {
    const wrapper = shallow(<HelpPage />);
    expect(wrapper.find('div').text()).toEqual("Please contact James Rodney with any problems at jlrodney95@gmail.com");
  })
});

describe('should render Header correctly', () => {
  const wrapper = shallow(<HelpPage />);
  expect(wrapper).toMatchSnapshot();
})
