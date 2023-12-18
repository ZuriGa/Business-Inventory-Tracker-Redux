import * as c from './../actions/ActionTypes';

const reducer =(state = [], action) => {
    const { name, origin, price, roast, flavor, poundsLeft, id } = action;
    switch (action.type) {
        case c.ADD_INVENTORY:
            return [
            ...state,  
            // Object.assign({}, state, {
        
                {
                    name: name, 
                    origin: origin,
                    price: price,
                    roast: roast,
                    flavor: flavor,
                    poundsLeft: poundsLeft,
                    id: id
                },
            ];
            case c.DELETE_INVENTORY:
                // let newState = { ...state };
                // delete newState[id];
                return state.filter(coffee => coffee.id !== id);
        default:
            return state;
    }
};

export default reducer;