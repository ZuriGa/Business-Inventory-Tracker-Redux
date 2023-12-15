import inventoryListReducer from '../../../reducers/inventory-list-reducer';

describe('inventoryListReducer', () => {
    test('Should return default state if there is no action type passed into the reduce', () => {
        expect(inventoryListReducer({}, {type: null})).toEqual({});
    });
});