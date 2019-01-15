import React from 'react';
import { shallow } from 'enzyme';
import Homepage from '../Homepage';

// describe('Homepage should render  correctly', () => {
//   it('should have a div', () => {
//     const wrapper = shallow(<Homepage />);
//     expect(wrapper.find('div').text()).toEqual("This will be the homepage!");
//   })
// });
describe('Homepage', () => {
  it('shoulf have a div with text', () => {
    const wrapper = shallow(<Homepage />);
    expect(wrapper.find('div').text()).toEqual("<Connect(ExpenseList) />");
  })
  it('should match snapshot', () => {
    const wrapper = shallow(<Homepage />);
    expect(wrapper).toMatchSnapshot();
  })
})
