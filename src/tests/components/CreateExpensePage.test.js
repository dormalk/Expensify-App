import React from 'react';
import {shallow} from 'enzyme';
import {CreateExpensePage} from '../../components/CreateExpensePage';
import expenses from '../fixtures/expense';

let AddExpense, history, wrapper;

beforeEach(() => {
    AddExpense = jest.fn();
    history = { push:jest.fn() };
    wrapper = shallow(<CreateExpensePage AddExpense={AddExpense} history={history}/>);
});

test('should render CreateExpensePage correctly',() => {
    expect(wrapper).toMatchSnapshot(); 
});

test('should hendle onSubmit',() => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(AddExpense).toHaveBeenLastCalledWith(expenses[1]);

});