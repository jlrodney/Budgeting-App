import {
  startAddExpense,
  addExpense,
  editExpense,
  startEditExpense,
  removeExpense,
  startRemoveExpense,
  setExpenses,
  startSetExpenses
} from '../expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';

const expense = {
    id: '1',
    description: 'Electricity',
    note: '',
    amount: 180,
    createdAt: 0
  };
const expenses = [{
  id: '1',
  description: 'Electricity',
  note: 'test elec',
  amount: 180,
  createdAt: 0
}, {
  id: '2',
  description: 'Lunch',
  note: 'test note',
  amount: 5,
  createdAt: 1
}, {
  id: '3',
  description: 'Credit Card debt interest',
  note: '',
  amount: 60,
  createdAt: 0
}];

const createMockStore = configureMockStore([thunk]);
beforeEach((done) => {
  const expenseData = {};
  expenses.forEach(({ id, description, note, amount, createdAt }) => {
    expenseData[id] = { description, note, amount, createdAt };
  });
  database.ref('expenses').set(expenseData).then(() => done());
})
describe('setExpense and startSetExpense action', () => {
  it('should setup set expense action object with data', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
      type: 'SET_EXPENSES',
      expenses
    });
  });

  it('should fetch the expenses from firebase', (done) => {
    const store = createMockStore({});
    store.dispatch(startSetExpenses()).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'SET_EXPENSES',
        expenses
      });
      done();
    });
  });

})

describe('Remove expenses action', () => {
  it('should setup remove expense action object', () => {
    const action = removeExpense({ id: '1' });
    expect(action).toEqual({
      type: 'REMOVE_EXPENSE',
      id: '1'
    });
  });

  it('should remove expense from firebase', (done) => {
    const store = createMockStore({});
    const id = expenses[2].id;
    store.dispatch(startRemoveExpense({ id })).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'REMOVE_EXPENSE',
        id
      });
      return database.ref(`expenses/${id}`).once('value');
    }).then((snapshot) => {
      expect(snapshot.val()).toBeFalsy();
      done();
    });
  });
})

describe('Edit expenses action', () => {
  it('should setup edit expense action object', () => {
    const action = editExpense('1', { note: 'New note test' });
    expect(action).toEqual({
      type: 'EDIT_EXPENSE',
      id: '1',
      updates: {
        note: 'New note test'
      }
    });
  });

  it('should edit expense from firebase', (done) => {
    const store = createMockStore({});
    const id = expenses[0].id;
    const updates = { amount: 180 };
    store.dispatch(startEditExpense(id, updates)).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'EDIT_EXPENSE',
        id,
        updates
      });
      return database.ref(`expenses/${id}`).once('value');
    }).then((snapshot) => {
      expect(snapshot.val().amount).toBe(updates.amount);
      done();
    });
  });
})

describe('Add expenses action', () => {
  it('should setup add expense action object with provided values', () => {
    const action = addExpense(expense);
    expect(action).toEqual({
      type: 'ADD_EXPENSE',
      expense: expense
    });
  });

  it('should add expense to database and store', (done) => {
    const expenseData = {
      description: 'Electricity',
      note: 'testing',
      amount: 180,
      createdAt: 0
    }
    const store = createMockStore({});
    store.dispatch(startAddExpense(expenseData)).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expenseData
        }
      });
      return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
  });

  it('should add expense with defaults to database and store', () => {
    const defaultData = {
      description: '',
      note: '',
      amount: 0,
      createdAt: 0
    }
    const store = createMockStore({});
    store.dispatch(startAddExpense({})).then(() => {
      const actions = store.getActions();
      console.log(actions);
      console.log(actions[0]);
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...defaultData
        }
      });
      return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(defaultData);
        done();
    });
  });
})
