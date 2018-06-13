import React from 'react';
import { connect } from 'react-redux';
import expenses from '../selectors/expenses';
import selectedExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';

export const ExpensesSummery = ({expensesCount,expensesTotal}) => {
    const expensesWord = expensesCount === 1 ? 'expense' : 'expenses';
    const expensesTotalNumeral = numeral(expensesTotal / 100).format('$0,0.00');
    return (
        <div>
            <h2>Viewing {expensesCount} {expensesWord} totalling {expensesTotalNumeral}</h2>
        </div>
    );
};
const mapStateToProps = (state) =>{
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expensesCount: visibleExpenses.length,
        expensesTotal: selectedExpensesTotal(visibleExpenses)    
    };
};

export default connect(mapStateToProps)(ExpensesSummery);