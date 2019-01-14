import React from 'react';
import { shallow } from 'enzyme';
import ExpenseItem from '../ExpenseItem';
import moment from 'moment';


describe('Expense item', () => {
  it('should render correctly', () => {
    const expenses = [{
      id: '1',
      description: 'Elictricity',
      note: '',
      amount: 180,
      createdAt: 0
    }, {
      id: '2',
      description: 'Lunch',
      note: '',
      amount: 5,
      createdAt: moment(0).subtract(4, 'days').valueOf()
    }, {
      id: '3',
      description: 'Credit Card debt interest',
      note: '',
      amount: 60,
      createdAt: moment(0).add(4, 'days').valueOf()
    }];
    const wrapper = shallow(<ExpenseItem {...expenses[0]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
