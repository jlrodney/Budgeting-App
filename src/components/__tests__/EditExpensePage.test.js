import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../EditExpensePage';
import moment from 'moment';

let editExpense, history, wrapper;
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
  editExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditExpensePage
      editExpense={editExpense}
      history={history}
      expense={expenses[1]}
    />
  );
});
describe('Edit Expense Page', () => {
  it('should render EditExpensePage', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should handle editExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[1]);
  });
});
