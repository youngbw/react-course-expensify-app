import expenses from '../fixtures/expenses';
import selectExpensesTotal from '../../selectors/expenses-total';


test('should return 0 for empty array', () => {
    expect(selectExpensesTotal([])).toBe(0);
});

test('should correctly add up a single expense', () => {
    const value = expenses[0].amount;
    expect(selectExpensesTotal([expenses[0]])).toBe(value);
});

test('should correctly add up multiple expenses', () => {
    expect(selectExpensesTotal(expenses)).toBe(114195);
});