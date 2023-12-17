import * as actions from './../../../actions';

describe('Coffee inventory actions', () => {
    it('deleteInventory should create DELETE_INVENTORY action', () => {
        expect(actions.deleteInventory(1)).toEqual({
            type: 'DELETE_INVENTORY',
            id: 1
        });
    });

    it('toggleForm should create a TOGGLE_FORM action', () => {
        expect(actions.toggleForm()).toEqual({
            type: 'TOGGLE_FORM'
        });
    });

    it('addInventory should create ADD_INVENTORY action', () => {
        expect(actions.addInventory({
            name: 'Light City',
            origin: 'Costa Rica',
            price: '$17.00',
            roast: 'Light roast',
            size: '1 lb',
            flavor: 'Our Costa Rica coffee is a delicate showing with bright notes of bergamot and lemongrass.',
            poundsLeft: 130,
            id: '1'
        })).toEqual({
            type: 'ADD_INVENTORY',
            name: 'Light City',
            origin: 'Costa Rica',
            price: '$17.00',
            roast: 'Light roast',
            size: '1 lb',
            flavor: 'Our Costa Rica coffee is a delicate showing with bright notes of bergamot and lemongrass.',
            poundsLeft: 130,
            id: '1'
        });
    });
});
