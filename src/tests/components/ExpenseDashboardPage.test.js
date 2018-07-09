import React from 'react';
import { shallow } from 'enzyme';
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage';

test('Should render the ExpenseDashboardPage properly', () => {
    const wrapper = shallow(<ExpenseDashboardPage />);
    expect(wrapper).toMatchSnapshot();
});