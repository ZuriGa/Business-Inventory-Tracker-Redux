import * as c from './ActionTypes';

export const deleteInventory = id => ({
    type: c.DELETE_INVENTORY,
    id
});

export const toggleForm = () => ({
    type: c.TOGGLE_FORM
});

export const addInventory = (newCoffee) => {
    const { name, origin, price, roast, flavor, poundsLeft, id } = newCoffee;
    return {
        type: c.ADD_INVENTORY,
        name: name,
        origin: origin,
        price: price,
        roast: roast,
        flavor: flavor,
        poundsLeft: poundsLeft,
        id: id
    } 
}