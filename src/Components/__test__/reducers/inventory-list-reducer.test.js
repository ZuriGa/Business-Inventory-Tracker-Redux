import inventoryListReducer from '../../../reducers/inventory-list-reducer';

describe('inventoryListReducer', () => {

    let action;
    const coffeeInventory = {
        name: 'Light City',
        origin: 'Costa Rica',
        price: '$17.00',
        roast: 'Light roast',
        size: '1 lb',
        flavor: 'Our Costa Rica coffee is a delicate showing with bright notes of bergamot and lemongrass.',
        poundsLeft: 130,
        id: '1'
    };


    test('Should return default state if there is no action type passed into the reducer', () => {
        expect(inventoryListReducer({}, { type: null })).toEqual({});
    });

    test('Should successfully add new coffee inventory to mainCoffeeList', () => {
        const { name, origin, price, roast, size, flavor, poundsLeft, id } = coffeeInventory;
        action = {
            type: 'ADD_INVENTORY',
            name: name, 
            origin: origin,
            price: price,
            roast: roast,
            size: size,
            flavor: flavor,
            poundsLeft: poundsLeft,
            id: id
        };
        expect(inventoryListReducer({}, action)).toEqual({
            [id] : {
                name: name, 
                origin: origin,
                price: price,
                roast: roast,
                size: size,
                flavor: flavor,
                poundsLeft: poundsLeft,
                id: id
            }
        });
    });


});