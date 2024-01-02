import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../actions';

function InventoryDetails(props) {
    const { coffee, onSellPound, onClickingDelete, onClickingEdit } = props;
    
    
    const isOutOfStock = coffee && coffee.poundsLeft <= 0 ;
    

    const handleDeletingCoffee = () => {
        onClickingDelete(coffee.id);
    };

    const handleEditingCoffeeInList = () => {
        onClickingEdit(coffee);
    };

    const handleSellPound = () => {
        if (coffee && coffee.poundsLeft > 0) {
            onSellPound();
        }
    };
    
    return (
        <React.Fragment>
            {coffee && (
            <div>
                <div>
                    <h1>Coffee Details</h1>
                    <h3>Name: {coffee.name}</h3>
                    <h3>Origin: {coffee.origin}</h3>
                    <h3>Price: ${coffee.price}</h3>
                    <h3>Roast: {coffee.roast}</h3>
                    <h3>Quantity: {coffee.poundsLeft}</h3>
                    <h3><em>{coffee.flavor}</em></h3>
                    <button onClick={handleSellPound} disabled={isOutOfStock}>Sell 1 lb</button>
                    <button onClick={handleEditingCoffeeInList}>Update Coffee Details</button>
                    <button onClick={handleDeletingCoffee}>Delete Coffee</button>
                </div>
            </div>
            )}
        </React.Fragment>
    );
}


InventoryDetails.propTypes = {
    coffee: PropTypes.object,
    onSellPound: PropTypes.func.isRequired,
    onClickingDelete: PropTypes.func,
    onClickingEdit: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClickingDelete: (id) => dispatch(actions.deleteInventory(id)),
        onClickingEdit: (coffee) => {
            dispatch(actions.editInventory(coffee.id, coffee));
            dispatch(actions.toggleForm());
        },
    };
};

export default connect(null, mapDispatchToProps)(InventoryDetails);