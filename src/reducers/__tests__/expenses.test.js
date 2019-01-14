import expensesReducer from '../expenses';
import moment from 'moment';

describe('expenses reducer', () => {
  it('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
  });

  it('should add an expense', () => {
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
    const expense = {
      id: '109',
      description: 'Laptop',
      note: '',
      createdAt: 20000,
      amount: 29500
    };
    const action = {
      type: 'ADD_EXPENSE',
      expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
  });
})
