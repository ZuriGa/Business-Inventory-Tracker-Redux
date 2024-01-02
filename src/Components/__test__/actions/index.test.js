import * as actions from './../../../actions';
import * as c from '../../../actions/ActionTypes';
import { act } from 'react-dom/test-utils';

describe('Coffee inventory actions', () => {
    it('deleteInventory should create DELETE_INVENTORY action', () => {
        const id = 1;
        const action = actions.deleteInventory(id);
        expect(action).toEqual({
            type: c.DELETE_INVENTORY,
            payload: { id },
        });
    });

    it('toggleForm should create a TOGGLE_FORM action', () => {
        expect(actions.toggleForm()).toEqual({
            type: c.TOGGLE_FORM
        });
    });

    it('addInventory should create ADD_INVENTORY action', () => {
        const coffeeData = {
            name: 'Light City',
            origin: 'Costa Rica',
            price: '$17.00',
            roast: 'Light roast',
            flavor: 'Our Costa Rica coffee is a delicate showing with bright notes of bergamot and lemongrass.',
            poundsLeft: 130,
            id: '1'
        };
        const action = actions.addInventory(coffeeData);
        expect(action).toEqual({
            type: c.ADD_INVENTORY,
            payload: coffeeData,
        })
    });

    it('editInventory should create EDIT_INVENTORY action', () => {
        const coffeeData = {
            name: 'Updated Coffee',
            origin: 'Updated Origin',
            price: '$20.00',
            roast: 'Updated Roast',
            flavor: 'Updated Flavor',
            poundsLeft: 130,
            id: '1'
        };
        const action = actions.editInventory(coffeeData.id, coffeeData);
        expect(action).toEqual({
            type: c.EDIT_INVENTORY,
            payload: {
                id: coffeeData.id,
                updatedCoffee: coffeeData,
            },
        });
    });

});
