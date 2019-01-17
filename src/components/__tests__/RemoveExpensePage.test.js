import React from 'react';
import { shallow } from 'enzyme';
import { RemoveExpensePage } from '../RemoveExpensePage';

let startRemoveExpense, history, wrapper;
const expenses = [{
  id: '1',
  description: 'Elictricity',
  note: '',
  amount: 180,
  createdAt: 0
}]
beforeEach(() => {
  startRemoveExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <RemoveExpensePage
      startRemoveExpense={startRemoveExpense}
      history={history}
      expense={expenses[0]}
    />
  );
});
describe('RemoveExpensePage', () => {
  it('should render RemoveExpensePage', () => {
    expect(wrapper).toMatchSnapshot();
  });


  it('should handle startRemoveExpense', () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startRemoveExpense).toHaveBeenLastCalledWith({
      id: expenses[0].id
    });
  });
});
