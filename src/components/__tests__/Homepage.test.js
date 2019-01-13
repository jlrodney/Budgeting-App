import React from 'react';
import { shallow } from 'enzyme';
import Homepage from '../Homepage';

describe('Homepage should render  correctly', () => {
  it('should have a div', () => {
    const wrapper = shallow(<Homepage />);
    expect(wrapper.find('div').text()).toEqual("This will be the homepage!");
  })
});
describe('should render Header correctly', () => {
  const wrapper = shallow(<Homepage />);
  expect(wrapper).toMatchSnapshot();
})
