import rootReducer from '../../../reducers/index';
import { createStore } from 'redux';
import formVisibleReducer from '../../../reducers/form-visible-reducer';
import inventoryListReducer from '../../../reducers/inventory-list-reducer';

let store = createStore(rootReducer);

describe('rootReducer', () => {
    test('Should return default state if no action type is recognized', () => {
        expect(rootReducer({}, { type: null })).toEqual({
            mainCoffeeList: {},
            formVisibleOnPage: false
        });
    });

    test('Check that initial state of inventoryListReducer matches root reducer', () => {
        expect(store.getState().mainCoffeeList).toEqual(inventoryListReducer(undefined, { type: null }));
    });

    test('Check that initial state of formVisibleReducer matches root reducer', () => {
        expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null }));
    });

    test('Check that ADD_INVENTORY action works for inventoryListReducer and root reducer', () => {
        const action = {
            type: 'ADD_INVENTORY',
            name: 'Light City',
            origin: 'Costa Rica',
            price: '$17.00',
            roast: 'Light roast',
            size: '1 lb',
            flavor: 'Our Costa Rica coffee is a delicate showing with bright notes of bergamot and lemongrass.',
            poundsLeft: 130,
            id: '1'
        }
        store.dispatch(action);
        expect(store.getState().mainCoffeeList).toEqual(inventoryListReducer(undefined, action));
    });

    test('Check that TOGGLE_FORM action works for formVisibleReducer and root reducer', () => {
        const action = {
            type: 'TOGGLE_FORM'
        }
        store.dispatch(action);
        expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action ));
    });
});