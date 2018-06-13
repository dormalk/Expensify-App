import React from 'react';
import { shallow } from 'enzyme';
import {ExpensesSummery} from '../../components/ExpensesSummery';

test('should render correctly ExpensesSummery with 1 expense',() => {
    const wrapper = shallow(<ExpensesSummery expensesCount={1} expensesTotal={123}/>);
    expect(wrapper).toMatchSnapshot();
});


test('should render correctly ExpensesSummery with multipale expenses',() => {
    const wrapper = shallow(<ExpensesSummery expensesCount={26} expensesTotal={19913233123}/>);
    expect(wrapper).toMatchSnapshot();
});