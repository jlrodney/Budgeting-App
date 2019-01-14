import { addExpense } from '../expenses';

describe('expenses actions', () => {
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
