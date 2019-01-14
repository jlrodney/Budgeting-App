import React from 'react';
import { shallow, mount } from 'enzyme';
import {MemoryRouter, Link} from 'react-router';
import NotFoundPage from '../NotFoundPage';

describe('NotFoundPage should render  correctly', () => {
  it('should have a div', () => {
    const wrapper = shallow(<NotFoundPage />);
    expect(wrapper.find('div').text()).toEqual("404 - <Link />");
  })
  it('should have a link to homepage', () => {
    const wrapper = shallow(<NotFoundPage />);
    expect(wrapper.find('Link').prop('to')).toBe("/");
  })
});

describe('should render Header correctly', () => {
  const wrapper = shallow(<NotFoundPage />);
  expect(wrapper).toMatchSnapshot();
})
