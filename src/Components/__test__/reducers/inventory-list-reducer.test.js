import inventoryListReducer from '../../../reducers/inventory-list-reducer';
import * as c from '../../../actions/ActionTypes';

describe('inventoryListReducer', () => {

    let action;
    const currentState = [
        {
        name: 'Light City',
        origin: 'Costa Rica',
        price: '$17.00',
        roast: 'Light roast',
        flavor: 'Our Costa Rica coffee is a delicate showing with bright notes of bergamot and lemongrass.',
        poundsLeft: 130,
        id: '1'
    },    
    {
        name: 'American Roast',
        origin: 'Guatemala',
        price: '$19.00',
        roast: 'Medium roast',
        flavor: 'Our Organic House blend balances mild acidity, medium body, and walnut flavor notes in perfect harmony.',
        poundsLeft: 130,
        id: '2'
    }
    ];


    test('Should return default state if there is no action type passed into the reducer', () => {
        expect(inventoryListReducer({}, { type: null })).toEqual({});
    });

    test('Should successfully add new coffee inventory to mainCoffeeList', () => {
        const { name, origin, price, roast, flavor, poundsLeft, id } = currentState[0];
        action = {
            type: c.ADD_INVENTORY,
            payload: {
            name: name, 
            origin: origin,
            price: price,
            roast: roast,
            flavor: flavor,
            poundsLeft: poundsLeft,
            id: id
        }
    };
        const result = inventoryListReducer(currentState, action);
        console.log('Reducer Output:', result);
        expect(result).toEqual(currentState);
    });

    test('Should successfully delete an inventory item', () => {
        action = {
            type: c.DELETE_INVENTORY,
            payload: { id: '1' }
        };
        expect(inventoryListReducer(currentState, action)).toEqual([
            {
            name: 'American Roast',
            origin: 'Guatemala',
            price: '$19.00',
            roast: 'Medium roast',
            flavor: 'Our Organic House blend balances mild acidity, medium body, and walnut flavor notes in perfect harmony.',
            poundsLeft: 130,
            id: '2'
            }
        ]);
    });


});