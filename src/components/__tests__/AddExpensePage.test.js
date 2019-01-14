import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../AddExpensePage';
import moment from 'moment';

let addExpense, history, wrapper;
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

beforeEach(() => {
  addExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history} />);
});
describe('Expense page', () => {
  it('should render AddExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should handle onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(addExpense).toHaveBeenLastCalledWith(expenses[0]);
  });
});
