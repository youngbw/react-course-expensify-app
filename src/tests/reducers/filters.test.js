import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should set default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sort by to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

test('should set sort by to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = {
        type: 'SORT_BY_DATE'
    };
    const result = filtersReducer(currentState, action);
    expect(result.sortBy).toBe('date');
});

test('should set text filter', () => {
    const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text: 'rent' });
    expect(state.text).toBe('rent');
});

test('should set startDate filter', () => {
    const startDate = moment();
    const state = filtersReducer(undefined, { type: 'SET_START_DATE', startDate});
    expect(state.startDate).toEqual(startDate);
});

test('should set endDate filter', () => {
    const endDate = moment();
    const state = filtersReducer(undefined, { type: 'SET_END_DATE', endDate });
    expect(state.endDate).toEqual(endDate);
});