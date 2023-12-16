import formVisibleReducer from '../../../reducers/form-visible-reducer';

describe('formVisibleReducer', () => {
    test('Should return default state if not action type is recognized', () => {
        expect(formVisibleReducer(false, { type: null })).toEqual(false);
    });
});