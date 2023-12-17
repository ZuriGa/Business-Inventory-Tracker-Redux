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
});
