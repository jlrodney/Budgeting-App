import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import ExpenseForm from '../ExpenseForm';
const expense = {
    id: '1',
    description: 'Elictricity',
    note: '',
    amount: 180,
    createdAt: 0
  };

describe('Add expense form component', () => {
    it('should render form', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render form correctly with data', () => {
    const wrapper = shallow(<ExpenseForm expense={expense} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
      preventDefault: () => { }
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
  });

  it('should set description on input change', () => {
    const value = 'New description';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change', {
      target: { value }
    });
    expect(wrapper.state('description')).toBe(value);
  });

  it('should set note on note change', () => {
    const value = 'New note value';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('textarea').simulate('change', {
      target: { value }
    });
    expect(wrapper.state('note')).toBe(value);
  });

  it('should set amount if valid input', () => {
    const value = '23.50';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
      target: { value }
    });
    expect(wrapper.state('amount')).toBe(value);
  });

  it('should not set amount if invalid input', () => {
    const value = '12.122';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
      target: { value }
    });
    expect(wrapper.state('amount')).toBe('');
  });

  it('should call onSubmit prop for valid form submission', () => {
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('form').simulate('submit', {
      preventDefault: () => { }
    });
    expect(wrapper.state('error')).toBe("Please provide description and amount.");
  });
  it('should call onSubmit prop for valid form submission', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm onSubmit={onSubmitSpy} />);
    let value = '23.50';
    wrapper.find('input').at(1).simulate('change', {
      target: { value }
    });
    value = 'Test';
    wrapper.find('input').at(0).simulate('change', {
      target: { value }
    });
    value = 'Test';
    wrapper.find('textarea').simulate('change', {
      target: { value }
    });
    value = 0;
    wrapper.find('withStyles(SingleDatePicker)').simulate('change', {
      target: { value }
    });
    wrapper.find('form').simulate('submit', {
      preventDefault: () => { }
    });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
      description: "Test",
      amount: 2350,
      note: "Test",
      createdAt: 0
    });
  });

  it('should set new date on date change', () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
  });

  it('should set calendar focus on change', () => {
    const focused = true;
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({ focused });
    expect(wrapper.state('calendarFocused')).toBe(focused);
  });
});
