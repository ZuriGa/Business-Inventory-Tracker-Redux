const reducer =(state = {}, action) => {
    const { name, origin, price, roast, size, flavor, poundsLeft, id } = action;
    switch (action.type) {
        case 'ADD_INVENTORY':
            return Object.assign({}, state, {
                [id]: {
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
            case 'DELETE_INVENTORY':
                let newState = { ...state };
                delete newState[id];
                return newState;
        default:
            return state;
    }
};

export default reducer;