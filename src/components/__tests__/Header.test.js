import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { Header } from '../Header';

describe('Header should render  correctly', () => {
  it('should have headline', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('h1').text()).toEqual("Budgeting App");
  })
  it('should have a link to homepage', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find("NavLink").length).toBe(3)
    expect(wrapper.find('NavLink.home').prop('to')).toBe("/homepage");
    expect(wrapper.find('NavLink.create').prop('to')).toBe("/create");
    expect(wrapper.find('NavLink.help').prop('to')).toBe("/help");
  })

  it('should call logout on button click', () => {
    const startLogOutSpy = jest.fn();
    const wrapper = shallow(<Header startLogout={startLogOutSpy} />);
    wrapper.find('button').simulate('click');
    expect(startLogOutSpy).toHaveBeenCalled();
  })
});

describe('should render Header correctly', () => {
  const wrapper = shallow(<Header startLogout={() => { }} />);
  expect(wrapper).toMatchSnapshot();
})
