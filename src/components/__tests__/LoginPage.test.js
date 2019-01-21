import React from 'react';
import { shallow } from 'enzyme';
import {LoginPage} from '../LoginPage';

describe('LoginPage Component', () => {
  it('should have a button', () => {
    const wrapper = shallow(<LoginPage />);
    expect(wrapper.find('button').text()).toBe("Login")
    expect(wrapper).toMatchSnapshot()
  })

  it('should call login on button click', () => {
    const startLoginSpy = jest.fn();
    const wrapper = shallow(<LoginPage startLogin={startLoginSpy} />)
    wrapper.find('button').simulate('click');
    expect(startLoginSpy).toHaveBeenCalled();
  })
})
