import inventoryListReducer from '../../../reducers/inventory-list-reducer';

describe('inventoryListReducer', () => {

    let action;
    const coffeeInventory = [
        {
            name: 'Light City',
            origin: 'Costa Rica',
            price: '$17.00',
            roast: 'Light roast',
            size: '1 lb',
            flavor: 'Our Costa Rica coffee is a delicate showing with bright notes of bergamot and lemongrass.' ,
            poundsLeft: 130,
            id: '0'
    
        },
        {
            name: 'American Roast',
            origin: 'Guatemala',
            price: '$19.00',
            roast: 'Medium roast',
            size: '1 lb',
            flavor: 'Our Organic House blend balances mild acidity, medium body, and walnut flavor notes in perfect harmony.',
            poundsLeft: 130,
            id: '1'
        },
    ];

    test('Should return default state if there is no action type passed into the reduce', () => {
        expect(inventoryListReducer({}, {type: null})).toEqual({});
    });

    test('Should successfully add inventory data to mainCoffeeList', () => {
        const { name, origin, price, roast, size, flavor, poundsLeft, id } = coffeeInventory[0];
        action = {
            type: 'ADD_INVENTORY',
            payload : {
            name: name, 
            origin: origin, 
            price: price, 
            roast: roast, 
            size: size,
            flavor: flavor,
            poundsLeft: poundsLeft,
            id: id,
            },
        };
        expect(inventoryListReducer({}, action)).toEqual({
            mainCoffeeList: [action.payload],
        });
    });
});