import * as c from './../actions/ActionTypes';

const initialState = [];

const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case c.ADD_INVENTORY:
            const index = state.findIndex(coffee => coffee.id === payload.id);
            
            if (index !== -1) {
                const updatedState = [...state];
                updatedState[index] = { ...updatedState[index], ...payload };
                return updatedState;
            }
            return [
                ...state, 
                payload,
            ];

        case c.DELETE_INVENTORY:
            return state.filter(coffee => coffee.id !== payload.id);
        
        case c.EDIT_INVENTORY:
            const editIndex = state.findIndex(coffee => coffee.id === payload.id);

            if (editIndex !== -1) {
                const editedState = [...state];
                editedState[editIndex] = payload.editCoffee;
                return editedState;
            }

        default:
            return state;
    }
};

export default reducer;