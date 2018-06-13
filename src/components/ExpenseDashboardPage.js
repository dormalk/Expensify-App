import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummey from './ExpensesSummery';
const ExpenseDashboardPage = () => (
  <div>
    <ExpensesSummey/>
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;
