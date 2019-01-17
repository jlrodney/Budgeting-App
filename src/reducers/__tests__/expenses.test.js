import expensesReducer from '../expenses';
import moment from 'moment';

const expenses = [{
  id: '1',
  description: 'Electricity',
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

const expense = {
  id: '109',
  description: 'Laptop',
  note: '',
  createdAt: 20000,
  amount: 29500
};
describe('expenses reducer', () => {
  it('should set default state', () => {
    const state = expensesReducer(undefined, { type: 'test' });
    expect(state).toEqual([]);
  });

  it('should add an expense', () => {
    const action = {
      type: 'ADD_EXPENSE',
      expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
  });

  it('should remove expense by id', () => {
    const action = {
      type: 'REMOVE_EXPENSE',
      id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
  });

  it('should not remove expenses if id not found', () => {
    const action = {
      type: 'REMOVE_EXPENSE',
      id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
  });

  it('should edit an expense', () => {
    const amount = 100;
    const action = {
      type: 'EDIT_EXPENSE',
      id: expenses[1].id,
      updates: {
        amount
      }
    };
  const state = expensesReducer(expenses, action);
  expect(state[1].amount).toBe(amount);
});

  it('should not edit an expense if id not found', () => {
    const amount = 100;
    const action = {
      type: 'EDIT_EXPENSE',
      id: '221',
      updates: {
        amount
      }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
  });

  it('should set expenses', () => {
    const action = {
      type: 'SET_EXPENSES',
      expenses: [expenses[1]]
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1]]);
  });

})
