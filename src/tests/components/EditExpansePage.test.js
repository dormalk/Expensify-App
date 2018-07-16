import React from 'react';
import {shallow} from 'enzyme';
import {EditExpansePage} from '../../components/EditExpansePage';
import expenses from '../fixtures/expenses';

let EditExpense,RemoveExpense,history,wrapper;

beforeEach(() => {
    EditExpense = jest.fn();
    RemoveExpense = jest.fn();
    history = {push: jest.fn()};
    wrapper = shallow(<EditExpansePage 
                            EditExpense={EditExpense} 
                            RemoveExpense={RemoveExpense} 
                            history={history}
                            expense={expenses[2]}/>);
})

test('should render EditExpensePage correctly',() => {
    expect(wrapper).toMatchSnapshot();
});

test('should hendle editExpense',() => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(EditExpense).toHaveBeenLastCalledWith(expenses[2]);
});

test('should hendle removeExpense',() => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(RemoveExpense).toHaveBeenLastCalledWith(expenses[2]);

});
