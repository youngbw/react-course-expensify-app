import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([ expenses[0], expenses[2] ]);
});

test('should not remove expenses if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: -1
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const expense = {
        id: '4',
        description: 'Water',
        note: '',
        amount: 1000000,
        createdAt: moment().add(10, 'days')
    };

    const action = {
        type: 'ADD_EXPENSE',
        expense
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([ ...expenses, expense ]);
});

test('should edit an expense', () => {
    const change = 'Water'
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: {
            description: change
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[0].description).toBe(change);
});

test('should not edit expense if expense not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            description: 'Nothing to see here'
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});