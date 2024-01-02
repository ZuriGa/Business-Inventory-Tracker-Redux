import React from 'react';
import PropTypes from 'prop-types';
import coffeeImage from './../Img/coffee.png';

const InventoryList = ({ inventoryList, onCoffeeSelection }) => {
    return(
        <React.Fragment>
            {Array.isArray(inventoryList) && inventoryList.map((coffeeInventory, index) => {
                if (!coffeeInventory.id) {
                    console.warn(`Item at index ${index} has an undefined or missing id.`);
                }
                return (
                <div key={coffeeInventory.id || index} id={coffeeInventory.id} onClick={() => onCoffeeSelection(coffeeInventory.id)}>
                <img src={coffeeImage} alt={'coffee bag'} style={{resizeMode: 'center', height: 250, width: 300, borderRadius: 20}} />
                <h2>{coffeeInventory.name}</h2>
                </div>
                );
})}
        </React.Fragment>
    );
}

InventoryList.propTypes = {
    inventoryList: PropTypes.array,
    onCoffeeSelection: PropTypes.func,

};

export default InventoryList;