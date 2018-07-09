import { setTextFilter, setEndDate, setStartDate, sortByAmount, sortByDate } from '../../actions/filters';
import moment from 'moment';

test('should generate set start date action object', () => {
    const startAction = setStartDate(moment(0));
    expect(startAction).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
});

test('should generate set end date action object', () => {
    const endAction = setEndDate(moment(0));
    expect(endAction).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
});

test('should generate set text filter action', () => {
    const textAction = setTextFilter('rent');
    expect(textAction).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'rent'
    });
});

test('should generate set text filter action with default value', () => {
    const textAction = setTextFilter();
    expect(textAction).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test('should generate sort by amount filter action', () => {
    const amountAction = sortByAmount();
    expect(amountAction).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
});

test('should generate sort by date filter action', () => {
    expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE' })
});