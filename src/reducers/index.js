import formVisibleReducer from './form-visible-reducer';
import inventoryListReducer from './inventory-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    formVisibleOnPage: formVisibleReducer,
    mainCoffeeList: inventoryListReducer
});

export default rootReducer;