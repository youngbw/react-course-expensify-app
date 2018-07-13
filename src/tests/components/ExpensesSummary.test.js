import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('should render 1 expense total correctly', () => {
    const wrapper = shallow(<ExpensesSummary expenses={[expenses[0]]} total={10000} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render multiple expenses total correctly', () => {
    const wrapper = shallow(<ExpensesSummary expenses={expenses} total={238429834} />);
    expect(wrapper).toMatchSnapshot();
});