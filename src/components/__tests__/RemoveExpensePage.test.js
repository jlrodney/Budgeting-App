import React from 'react';
import { shallow } from 'enzyme';
import { RemoveExpensePage } from '../RemoveExpensePage';

let removeExpense, history, wrapper;
const expenses = [{
  id: '1',
  description: 'Elictricity',
  note: '',
  amount: 180,
  createdAt: 0
}]
beforeEach(() => {
  removeExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <RemoveExpensePage
      removeExpense={removeExpense}
      history={history}
      expense={expenses[0]}
    />
  );
});
describe('RemoveExpensePage', () => {
  test('should render RemoveExpensePage', () => {
    expect(wrapper).toMatchSnapshot();
  });


  test('should handle removeExpense', () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith({
      id: expenses[0].id
    });
  });
});
