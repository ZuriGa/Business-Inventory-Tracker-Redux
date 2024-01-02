import * as c from './ActionTypes';

export const deleteInventory = (id) => ({
    type: c.DELETE_INVENTORY,
    payload: { id },
});

export const toggleForm = () => ({
    type: c.TOGGLE_FORM
});

export const addInventory = (newCoffee) => ({
    type: c.ADD_INVENTORY,
    payload: newCoffee,
});

export const editInventory = (id, updatedCoffee) => ({
    type: c.EDIT_INVENTORY,
    payload: { id, updatedCoffee },
});

