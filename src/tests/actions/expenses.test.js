import { addExpense, editExpense, removeExpense } from '../../actions/expenses';


test('should setup remove expense action object', () => {
    const removeAction = removeExpense({ id: '123abc' });
    expect(removeAction).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should setup edit expense action object', () => {
    const updates = {
        note: 'Here is my note'
    };
    const editAction = editExpense('123abc', updates);
    expect(editAction).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            ...updates
        }
    });
});

test('should setup add expense action object with provided values', () => {
    const expenseData = {
        description: 'Rent',
        amount: 109500,
        createdAt: 1000,
        note: 'This was last months rent'
    };
    const addAction = addExpense(expenseData);
    expect(addAction).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
});

test('should setup add expense action object with default values', () => {
    const addAction = addExpense();
    expect(addAction).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            note: '',
            amount: 0,
            createdAt: 0,
            id: expect.any(String)
        }
    })
});