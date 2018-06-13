import SelectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return zero if no expenses',() => {
    const result = SelectExpensesTotal([]);
    expect(result).toBe(0);
});

test('should correctly add up one expense',() => {
    const result = SelectExpensesTotal([expenses[0]]);
    expect(result).toBe(expenses[0].amount);
});

test('should correctly add up multi expenses',() => {
    const result = SelectExpensesTotal(expenses);
    expect(result).toBe(expenses[0].amount+expenses[1].amount+expenses[2].amount);
});