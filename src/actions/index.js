export const deleteInventory = id => ({
    type: 'DELETE_INVENTORY',
    id
});

export const toggleForm = () => ({
    type: 'TOGGLE_FORM'
});

export const addInventory = (coffee) => {
    const { name, origin, price, roast, size, flavor, poundsLeft, id } = coffee;
    return {
        type: 'ADD_INVENTORY',
        name: name,
        origin: origin,
        price: price,
        roast: roast,
        size: size,
        flavor: flavor,
        poundsLeft: poundsLeft,
        id: id
    } 
}