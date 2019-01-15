import { addExpense, editExpense, removeExpense } from '../expenses';

describe('Add expenses action', () => {
  it('should setup add expense action object with provided values', () => {
    const expenseData = {
      description: 'Rent',
      amount: 109500,
      createdAt: 1000,
      note: 'This was last months rent'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        ...expenseData,
        id: expect.any(String)
      }
    });
  });

  it('should setup add expense action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
      }
    });
  });
})

describe('Remove expenses action', () => {
  it('should setup remove expense action object', () => {
    const action = removeExpense({ id: 'testId'});
    expect(action).toEqual({
      type: 'REMOVE_EXPENSE',
        id: 'testId'
    });
  });

  it('should setup remove expense action object with undefined for id', () => {
    const action = removeExpense();
    expect(action).toEqual({
      type: 'REMOVE_EXPENSE',
        id: undefined
    });
  });
})

describe('Edit expenses action', () => {
  it('should setup add expense action object', () => {
    const action = editExpense('testId', {note: 'test Note'});
    expect(action).toEqual({
      type: 'EDIT_EXPENSE',
      id: 'testId',
      updates: {
        note: 'test Note'
      }
    });
  });
})
