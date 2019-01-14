import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseList } from '../ExpenseList';
import moment from 'moment';

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
describe('Expense list', () => {
  it('should render ExpenseList with expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render ExpenseList with empty message', () => {
    const wrapper = shallow(<ExpenseList expenses={[]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
